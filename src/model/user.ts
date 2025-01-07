import * as mongoose from 'mongoose';

/**
 * A simple representation of a user profile in the OpenDating platform.
 * Only contains attributes relevant to the matching algorithm.
 * Any algorithm which wishes to matchmake should use this schema.
 *
 * @interface User
 */
const schema = new mongoose.Schema({
  /**
   * User's self-description or biography
   * @maxLength 280 characters
   * @example "Passionate about hiking and photography"
   */
  bio: String,

  /**
   * User's date of birth
   * @example "1990-01-01T00:00:00.000Z"
   */
  date_of_birth: Date,

  /**
   * User's first name
   * @example "Molly"
   */
  first_name: String,

  /**
   * A list of genders that the user identifies as
   * @note Currently limited to binary options, will expand in future
   * @example ['female']
   */
  gender: [String],

  /**
   * User's last name
   * @example "Smith"
   */
  last_name: String,

  /**
   * Geographic coordinates in [longitude, latitude] format
   * Stored as GeoJSON Point coordinates
   * @type {[longitude: number, latitude: number]}
   * @example [18.0686, 59.3293] // Stockholm, Sweden
   * @note Longitude range: -180 to 180
   * @note Latitude range: -90 to 90
   */
  location: [Number],

  /**
   * A list of image urls provided by the user
   * @maxLength: 6 photos
   * @note Must follow regex: /^https?:\/\/.+\/.+\.(jpg|jpeg|png|gif|webp)$/i
   */
  photos: [String],

  /**
   * A list of genders that the user is interested in
   * @note Currently limited to binary options, will expand in future
   * @example ['male']
   */
  preferred_genders: [String],
});

export const UserModel = mongoose.model('User', schema);

export type User = mongoose.InferSchemaType<typeof schema>;
