const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  name: {
    type: String,
    
  },
  value: {
    type: Number,
    
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;