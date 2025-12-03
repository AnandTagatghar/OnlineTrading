const joi = require("joi");

module.exports.ordersSchema = joi
  .object({
    quantity: joi.number().min(1).required(),
    price: joi.number().min(1).required(),
    name: joi.string().min(2).required(),
    mode: joi.string().valid("buy", "sell").required(),
  })
  .unknown(true);

  