import { QueryExecutor, SearchFilter, UserDocument } from '@src/types';

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
export async function findRecommendedUsers(
    user: UserDocument,
    queryExecutor: QueryExecutor,
): Promise<UserDocument[]> {
    const MAX_SEARCH_RADIUS = 50000; // KM

    /**
     * Geographic proximity filter using MongoDB's $geoNear operator
     * Creates a spherical search area centered on the current user's location
     */
    const filterByDistanceFromCurrentUser: SearchFilter = {
        $geoNear: {
            near: {
                type: 'Point',
                coordinates: user.location,
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
    const filterByGender: SearchFilter = {
        $match: {
            gender: user.gender,
        },
    };

    return queryExecutor(user, [
        filterByDistanceFromCurrentUser,
        filterByGender,
    ]);
}
