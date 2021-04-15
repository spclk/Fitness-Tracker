const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chartSchema = new Schema({
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

const Chart = mongoose.model("Chart", chartSchema);

module.exports = Chart;