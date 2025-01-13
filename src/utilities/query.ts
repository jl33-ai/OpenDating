import { InMemoryDatabase } from '@src/utilities/database';
import { QueryExecutor, SearchFilter, User, UserDocument } from '@src/types';
import { UserModel } from '@src/model/user';

// Clears database and then populates new users
async function setUpExecutionEnvironment(
    database: InMemoryDatabase,
    users: User[],
): Promise<void> {
    if (!database.isConnected()) {
        throw new Error(
            'Tried to create a query execution environment without a running database',
        );
    }

    try {
        await UserModel.insertMany(users);
    } catch (error) {
        throw new Error(
            'Something went wrong while adding mock users to database',
        );
    }
}

/**
 * Creates a query execution environment
 * @param database
 * @param targetUser
 * @param users
 *
 * @returns A query executor function that will execute a query within the environment
 */
export const createQueryExecutionEnvironment = async (
    database: InMemoryDatabase,
    users: User[],
): Promise<{ queryExecutor: QueryExecutor }> => {
    await setUpExecutionEnvironment(database, users);

    const queryExecutor: QueryExecutor = (
        targetUser: UserDocument,
        rules: SearchFilter[],
    ) => {
        const matchUser = {
            $match: {
                _id: {
                    $ne: targetUser._id,
                },
            },
        };

        const limitSampleSize = { $sample: { size: 100 } };

        // @ts-ignore
        return UserModel.aggregate([...rules, matchUser, limitSampleSize]);
    };

    return { queryExecutor };
};
