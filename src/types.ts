import mongoose from 'mongoose';
import { schema } from '@src/model/user';

/**
 * A simple representation of a user profile in the OpenDating platform.
 * Only contains attributes relevant to the matching algorithm.
 */
export type User = Omit<mongoose.InferSchemaType<typeof schema>, 'location'> & {
    location: number[];
};

export type UserDocument = Omit<
    mongoose.Document<unknown, {}, User> & User,
    'location'
> & {
    location: number[];
};

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
 * @param targetUser - The user to generate recommendations for
 * @param rules - Array of MongoDB query filters to be applied sequentially
 * @returns Array of users matching all the specified filters
 */
export type QueryExecutor = (
    targetUser: User,
    rules: SearchFilter[],
) => Promise<User[]>;
