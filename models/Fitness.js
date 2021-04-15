const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      required: true,
      Enumerator: ["resistance", "cardio"]
    },
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: false,
    },
    reps: {
      type: Number,
      required: false,
    },
    sets: {
      type: Number,
      required: false,
    },
    distance: {
      type: Number,
      required: false,
    }
  }],
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;