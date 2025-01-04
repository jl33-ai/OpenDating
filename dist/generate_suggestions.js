"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSuggestedUsers = void 0;
/*
* Copyright (c) 2025 OpenDating
* The algorithm used to generate suggestions the current user (currentUser)
* In other words, the algorithm that decides who you see on Tinder
*
* @note The result will always exclude the current user and existing users,
*       you don't need to implement this
*
* @returns A list of users
* */
async function findSuggestedUsers(findUsers, currentUser) {
    const SEARCH_RADIUS = 50000; // km
    /*
    @purpose Filters for users within a current radius
    */
    const filterByDistanceFromCurrentUser = {
        $geoNear: {
            near: {
                type: 'Point',
                coordinates: currentUser.location,
            },
            distanceField: 'distance',
            spherical: true,
            maxDistance: SEARCH_RADIUS * 1000, // Convert km to meters
            key: 'location',
        },
    };
    /*
    @purpose Responsible for filtering users based on characteristics
    */
    const filterByGender = {
        $match: {
            gender: currentUser.gender,
        },
    };
    return findUsers([
        filterByDistanceFromCurrentUser,
        filterByGender,
    ]);
}
exports.findSuggestedUsers = findSuggestedUsers;
//# sourceMappingURL=generate_suggestions.js.map