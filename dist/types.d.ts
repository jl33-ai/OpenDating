/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import mongoose from 'mongoose';
import { schema } from '@src/model/user';
/**
 * A simple representation of a user profile in the OpenDating platform.
 * Only contains attributes relevant to the matching algorithm.
 */
export type User = Omit<mongoose.InferSchemaType<typeof schema>, 'location'> & {
    location: number[];
};
export type UserDocument = Omit<mongoose.Document<unknown, {}, User> & User, 'location'> & {
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
export type QueryExecutor = (targetUser: UserDocument, rules: SearchFilter[]) => Promise<UserDocument[]>;
//# sourceMappingURL=types.d.ts.map