const express = require("express");
const AsyncWrap = require("../utils/wrapAsync");
const { ordersSchema } = require("../schemas/joi.schema");
const ExError = require("../utils/ExError");
const Orders = require("../models/orders.model");
const { ordersSchemaCheck } = require("../middlewares");

const router = express.Router();

router.route("/").post(
  ordersSchemaCheck,
  AsyncWrap(async (req, res) => {
    const { name, quantity, price, mode } = req.body;

    let newOrder = await Orders.create({
      name,
      quantity,
      price,
      mode,
    });

    res.status(200).json({
      message: "Stock purchase successfully!",
      statusCode: 200,
      status: true,
      data: newOrder,
    });
  })
);

router.route("/sell").post(
  ordersSchemaCheck,
  AsyncWrap(async (req, res) => {
    const { name, quantity, price, mode } = req.body;

    let newOrder = await Orders.find({
      name,
    });

    console.log("next after");
    console.log(newOrder);

    if (newOrder && newOrder.length > 0) {
      if (newOrder[0].quantity >= quantity) {
        newOrder = await Orders.create({
          name,
          quantity,
          price,
          mode,
        });
      } else {
        throw new ExError("No enough quantity to sell!", 400);
      }
    } else {
      throw new ExError("No orders found on this!", 404);
    }

    res.status(200).json({
      message: "Stock sold successfully!",
      statusCode: 200,
      status: true,
      data: newOrder,
    });
  })
);

module.exports = router;
