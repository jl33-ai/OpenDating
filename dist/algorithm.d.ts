import { QueryExecutor, UserDocument } from '@src/types';
/**
 * Recommendation algorithm for the OpenDating platform.
 * Finds matches for a single user based on their attributes.
 * @copyright (c) 2025 OpenDating
 *
 * @param user - The user for whom suggestions are being generated
 * @param queryExecutor - Function to query the user database with specified filters
 *
 * @note Results automatically exclude the current user and their existing matches
 * @note Distance calculations use spherical geometry for accuracy
 *
 * @returns Promise<UserDocument[]> - Array of suggested users matching the criteria
 */
export declare function findRecommendedUsers(user: UserDocument, queryExecutor: QueryExecutor): Promise<UserDocument[]>;
//# sourceMappingURL=algorithm.d.ts.map