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
    min: 0,
    requried: [true, "Please provide price!"],
  },
  percent: {
    type: String,
    trim: true,
    required: [true, "Please provide percentage!"],
  },
  mode: {
    type: String,
    enum:["buy", "sell"],
    required: [true, "Please provde isDown!"],
  },
});

const Orders = model("Order", wishlistSchema);

module.exports = Orders;
