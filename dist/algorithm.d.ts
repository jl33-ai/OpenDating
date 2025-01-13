import { QueryExecutor, UserDocument } from '@src/types';
/**
 * User suggestion algorithm for the OpenDating platform.
 * Generates potential matches for users based on proximity and preferences.
 *
 * Algorithm Overview:
 * 1. Filters users within a specified geographic radius
 * 2. Applies gender preference filtering
 *
 * @copyright (c) 2025 OpenDating
 *
 * @param queryExecutor - Function to query the user database with specified filters
 * @param targetUser - The user for whom suggestions are being generated
 *
 * @note Results automatically exclude the current user and their existing matches
 * @note Distance calculations use spherical geometry for accuracy
 *
 * @returns Promise<User[]> - Array of suggested users matching the criteria
 */
export declare function findRecommendedUsers(targetUser: UserDocument, queryExecutor: QueryExecutor): Promise<UserDocument[]>;
//# sourceMappingURL=algorithm.d.ts.map