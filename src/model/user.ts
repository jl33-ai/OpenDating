import * as mongoose from 'mongoose';
import { LocationSchema } from '@src/model/GeoLocation';

export const schema = new mongoose.Schema({
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
     * The gender that the user identifies as
     * @note Currently limited to binary options, will expand in future
     * @example 'female'
     */
    gender: String,

    /**
     * Geographic coordinates in [longitude, latitude] format
     * Stored as GeoJSON Point coordinates
     * @type {[longitude: number, latitude: number]}
     * @example [18.0686, 59.3293] // Stockholm, Sweden
     * @note Longitude range: -180 to 180
     * @note Latitude range: -90 to 90
     */
    location: {
        type: LocationSchema,
        default: null,
        get: function (loc) {
            return loc ? loc.coordinates : undefined;
        },
        set: function (loc) {
            if (Array.isArray(loc)) {
                return {
                    type: 'Point',
                    coordinates: loc,
                };
            }
            return loc;
        },
    },

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

schema.index({ location: '2dsphere' });

export const UserModel = mongoose.model('User', schema);
