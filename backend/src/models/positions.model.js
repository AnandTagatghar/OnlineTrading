const { Schema, model } = require("mongoose");

const positionSchema = new Schema({
  product: {
    type: String,
    trim: true,
    required: [true, "Please provide product!"],
    set: (v) => {
      return v.at(0).toUpperCase() + v.slice(1).toLowerCase();
    },
  },

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
    required: [true, "Please provide quantity!"],
  },

  avg: {
    type: Number,
    min: 0,
    required: [true, "Please provide average!"],
  },

  price: {
    type: Number,
    min: 0,
    required: [true, "Please provide price!"],
  },

  net: {
    type: String,
    trim: true,
    required: [true, "Please provide net!"],
    set: (v) => {
      return v.at(0).toUpperCase() + v.slice(1).toLowerCase();
    },
  },

  day: {
    type: String,
    trim: true,
    required: [true, "Please provide day!"],
    set: (v) => {
      return v.at(0).toUpperCase() + v.slice(1).toLowerCase();
    },
  },

  isLoss: {
    type: Boolean,
    default: false,
    required: [true, "Please provide isLoss!"],
  },
});

const Positions = model("Position", positionSchema);

module.exports = Positions;
