"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRecommendedUsers = void 0;
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
async function findRecommendedUsers(targetUser, queryExecutor) {
    const MAX_SEARCH_RADIUS = 50000; // KM
    /**
     * Geographic proximity filter using MongoDB's $geoNear operator
     * Creates a spherical search area centered on the current user's location
     */
    const filterByDistanceFromCurrentUser = {
        $geoNear: {
            near: {
                type: 'Point',
                coordinates: targetUser.location,
            },
            distanceField: 'distance',
            spherical: true,
            maxDistance: MAX_SEARCH_RADIUS * 1000, // Convert to meters
            key: 'location',
        },
    };
    /**
     * Gender preference filter
     * Matches users based on the current user's gender preferences
     */
    const filterByGender = {
        $match: {
            gender: targetUser.gender,
        },
    };
    return queryExecutor(targetUser, [
        filterByDistanceFromCurrentUser,
        filterByGender,
    ]);
}
exports.findRecommendedUsers = findRecommendedUsers;
//# sourceMappingURL=algorithm.js.map