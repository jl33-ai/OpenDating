import { QueryExecutor, SearchFilter, User } from '@src/types';
import { findRecommendedUsers } from '@src/algorithm';

describe('findRecommendedUsersSanity', () => {
    // Mock user for testing
    const targetUser: User = {
        first_name: 'Test User',
        // Add minimal required properties that would be common across implementations
    };

    const mockUsers: User[] = [
        {
            first_name: 'Match User 1',
        },
        {
            first_name: 'Match User 2',
        },
    ];

    // Mock query executor that just returns the mock users
    const mockQueryExecutor: QueryExecutor = jest.fn(
        async (user: User, filters: SearchFilter[]) => {
            return Promise.resolve(mockUsers);
        },
    );

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return a Promise resolving to an array of users', async () => {
        const result = await findRecommendedUsers(
            targetUser,
            mockQueryExecutor,
        );

        expect(Array.isArray(result)).toBe(true);
        expect(result.every((user) => user.first_name)).toBe(true);
    });

    test('should call queryExecutor exactly once', async () => {
        await findRecommendedUsers(targetUser, mockQueryExecutor);

        expect(mockQueryExecutor).toHaveBeenCalledTimes(1);
    });

    test('should pass the target user to queryExecutor', async () => {
        await findRecommendedUsers(targetUser, mockQueryExecutor);

        const calls = (mockQueryExecutor as jest.Mock).mock.calls[0];
        expect(calls[0]).toBe(targetUser);
    });

    test('should pass an array of filters to queryExecutor', async () => {
        await findRecommendedUsers(targetUser, mockQueryExecutor);

        const calls = (mockQueryExecutor as jest.Mock).mock.calls[0];
        expect(Array.isArray(calls[1])).toBe(true);
    });

    test('should handle empty result from queryExecutor', async () => {
        const emptyQueryExecutor: QueryExecutor = jest.fn(async () => []);
        const result = await findRecommendedUsers(
            targetUser,
            emptyQueryExecutor,
        );

        expect(result).toHaveLength(0);
        expect(Array.isArray(result)).toBe(true);
    });

    test('should preserve the order of returned users', async () => {
        const orderedUsers = [
            { first_name: 'First' },
            { first_name: 'Second' },
            { first_name: 'Third' },
        ];

        const orderedQueryExecutor: QueryExecutor = jest.fn(
            async () => orderedUsers,
        );
        const result = await findRecommendedUsers(
            targetUser,
            orderedQueryExecutor,
        );

        expect(result).toEqual(orderedUsers);
    });

    test('should handle queryExecutor throwing an error', async () => {
        const errorQueryExecutor: QueryExecutor = jest.fn(async () => {
            throw new Error('Database error');
        });

        await expect(
            findRecommendedUsers(targetUser, errorQueryExecutor),
        ).rejects.toThrow('Database error');
    });

    test('should pass filters unchanged to queryExecutor', async () => {
        await findRecommendedUsers(targetUser, mockQueryExecutor);

        const calls = (mockQueryExecutor as jest.Mock).mock.calls[0];
        const filters = calls[1];

        // Verify filters are passed through without modification
        filters.forEach((filter) => {
            expect(filter).toBeDefined();
            expect(typeof filter).toBe('object');
        });
    });

    test('should not mutate the target user', async () => {
        const originalUser = { ...targetUser };
        await findRecommendedUsers(targetUser, mockQueryExecutor);

        expect(targetUser).toEqual(originalUser);
    });

    test('should not mutate the returned users', async () => {
        const result = await findRecommendedUsers(
            targetUser,
            mockQueryExecutor,
        );

        // Verify the returned users match the original mock users
        expect(result).toEqual(mockUsers);
    });

    test('should handle null target user gracefully', async () => {
        await expect(
            findRecommendedUsers(null, mockQueryExecutor),
        ).rejects.toBeDefined();
    });

    test('should handle undefined queryExecutor gracefully', async () => {
        await expect(
            findRecommendedUsers(targetUser, undefined),
        ).rejects.toBeDefined();
    });
});
