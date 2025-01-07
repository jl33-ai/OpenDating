/**
 * Represents a matchable user profile in the OpenDating platform.
 * Contains all essential attributes used for the matching algorithm.
 *
 * @interface User
 */
export interface User {
  /**
   * User's self-description or biography
   * @maxLength 280 characters
   * @example "Passionate about hiking and photography"
   */
  bio: string;

  /**
   * Geographic coordinates in [longitude, latitude] format
   * Stored as GeoJSON Point coordinates
   * @type {[longitude: number, latitude: number]}
   * @example [18.0686, 59.3293] // Stockholm, Sweden
   * @note Longitude range: -180 to 180
   * @note Latitude range: -90 to 90
   */
  location: number[];

  /**
   * User's gender identity
   * @note Currently limited to binary options, will expand in future
   */
  gender: 'male' | 'female';

  /**
   * A list of image urls provided by the user
   * @maxLength: 6 photos
   * @note Must follow regex: /^https?:\/\/.+\/.+\.(jpg|jpeg|png|gif|webp)$/i
   */
  photos: string[];
}

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
