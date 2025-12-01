const { Schema, model } = require("mongoose");

const holdingSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name!"],
    set: (v) => {
      return v.at(0).toUpperCase() + v.slice(1).toLowerCase();
    },
  },
  qty: {
    type: Number,
    min: 0,
    required: [true, "Please provide qty!"],
  },
  avg: {
    type: Number,
    min: 0,
    required: [true, "Please provide avg!"],
  },
  price: {
    type: Number,
    min: 0,
    required: [true, "Please provide price!"],
  },
  net: {
    type: String,
    trim: true,
    required: [true, "Please provde net!"],
    set: (v) => {
      return v.toLowerCase();
    },
  },
  day: {
    type: String,
    trim: true,
    required: [true, "Please provide day!"],
  },
});

const Holdings = model("Holding", holdingSchema);

module.exports = Holdings;
