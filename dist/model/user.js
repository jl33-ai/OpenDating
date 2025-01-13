"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.schema = void 0;
const mongoose = __importStar(require("mongoose"));
const GeoLocation_1 = require("@src/model/GeoLocation");
exports.schema = new mongoose.Schema({
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
        type: GeoLocation_1.LocationSchema,
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
exports.schema.index({ location: '2dsphere' });
exports.UserModel = mongoose.model('User', exports.schema);
//# sourceMappingURL=user.js.map