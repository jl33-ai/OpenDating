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
import * as mongoose from 'mongoose';
export declare const schema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}>> & mongoose.FlatRecord<{
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const UserModel: mongoose.Model<{
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}> & {
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}>> & mongoose.FlatRecord<{
    location: {
        type: "Point";
        coordinates: number[];
        description?: string;
    };
    photos: string[];
    preferred_genders: string[];
    bio?: string;
    date_of_birth?: NativeDate;
    first_name?: string;
    gender?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=user.d.ts.map