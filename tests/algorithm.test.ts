import { InMemoryDatabase } from '@src/utilities/database';
import { createQueryExecutionEnvironment } from '@src/utilities/query';
import { findRecommendedUsers, User } from '../src';
import { UserModel } from '@src/model/user';
import { getMockUsers } from '@tests/utilities/data';
import { createUser, logResult } from '@tests/utilities';

describe('findSuggestedUsers', () => {
    const database: InMemoryDatabase = new InMemoryDatabase();

    /**
     * Create a Mongo-Memory-Sever instance
     */
    beforeEach(async () => {
        await database.create();
        await UserModel.syncIndexes();
    });

    /**
     * Wipe and reset the instance
     */
    afterEach(async () => {
        await database.clear();
        await database.stop();
    });

    it('With a normal white male', async () => {
        const result = await match(
            {
                bio: 'Adventure seeker and coffee enthusiast. Always looking for the next mountain to climb! 📸',
                date_of_birth: new Date('1975-10-19T18:04:01.219Z'),
                first_name: 'Justin',
                gender: 'male',
                location: [55.2708, 25.2048],
                photos: [
                    'https://example.com/photos/user_profile_1.jpg',
                    'https://example.com/photos/adventure_2.jpg',
                ],
                preferred_genders: ['female'],
            },
            getMockUsers(),
        );

        logResult(result);
    });

    /**
     * A helper function to simplify the process of generating
     * suggestions using the algorithm for a sample user
     * against a sample population
     *
     * @param targetUser the user to find matches for
     * @param userPopulation the 'population' to search for matches within
     */
    async function match(targetUser: User, userPopulation: User[]) {
        const { queryExecutor } = await createQueryExecutionEnvironment(
            database,
            userPopulation,
        );

        return await findRecommendedUsers(
            await createUser(targetUser),
            queryExecutor,
        );
    }
});
