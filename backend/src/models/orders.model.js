const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide name!"],
    set: (v) => {
      return v.at(0).toUpperCase() + v.slice(1).toLowerCase();
    },
  },
  price: {
    type: Number,
    min: 1,
    requried: [true, "Please provide price!"],
  },
  quantity: {
    type: Number,
    trim: true,
    min: 1,
    required: [true, "Please provide percentage!"],
  },
  mode: {
    type: String,
    enum: ["buy", "sell"],
    required: [true, "Please provde isDown!"],
  },
});

const Orders = model("Order", orderSchema);

module.exports = Orders;
