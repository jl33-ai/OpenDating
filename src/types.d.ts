import { User } from '@src/model/user';

/**
 * Represents a MongoDB query filter used for searching users
 * Can include any MongoDB operators like $geoNear, $match, etc.
 * @note Rules will be chained and applied sequentially, so order matters
 *
 * @type SearchFilter
 * @example
 * {
 *   $match: { gender: 'female' }
 * }
 */
export type SearchFilter = object;

/**
 * Function type for querying users based on a set of search filters
 *
 * @param rules - Array of MongoDB query filters to be applied sequentially
 * @returns Array of users matching all the specified filters
 */
export type FindUser = (rules: SearchFilter[]) => Promise<User[]>;
