"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQueryExecutionEnvironment = void 0;
const user_1 = require("@src/model/user");
// Clears database and then populates new users
async function setUpExecutionEnvironment(database, users) {
    if (!database.isConnected()) {
        throw new Error('Tried to create a query execution environment without a running database');
    }
    try {
        await user_1.UserModel.insertMany(users);
    }
    catch (error) {
        throw new Error('Something went wrong while adding mock users to database');
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
const createQueryExecutionEnvironment = async (database, users) => {
    await setUpExecutionEnvironment(database, users);
    const queryExecutor = (targetUser, rules) => {
        const matchUser = {
            $match: {
                _id: {
                    $ne: targetUser._id,
                },
            },
        };
        const limitSampleSize = { $sample: { size: 100 } };
        // @ts-ignore
        return user_1.UserModel.aggregate([...rules, matchUser, limitSampleSize]);
    };
    return { queryExecutor };
};
exports.createQueryExecutionEnvironment = createQueryExecutionEnvironment;
//# sourceMappingURL=query.js.map