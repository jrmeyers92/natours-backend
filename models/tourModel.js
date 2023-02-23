const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  duration: {
    type: Number,
    required: [true, 'A Tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size']
  },
  difficult: {
    type: String,
    required: [true, 'A tour must have a difficult rating']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a name']
  }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
