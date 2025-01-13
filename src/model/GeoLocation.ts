import mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    default: 'Point',
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
    validate: {
      validator: function(coords) {
        return coords.length === 2 &&
          coords[0] >= -180 && coords[0] <= 180 &&
          coords[1] >= -90 && coords[1] <= 90;
      },
      message: 'Invalid location coordinates',
    },
  },
  description: { type: String, required: false },
}, { _id: false });