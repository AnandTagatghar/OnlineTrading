const { ordersSchema } = require("./schemas/joi.schema");
const ExError = require("./utils/ExError");
const AsyncWrap = require("./utils/wrapAsync");

module.exports.ordersSchemaCheck = AsyncWrap((req, res, next) => {
  if (!req.body) {
    throw new ExError("Please provide required fields!", 404);
  }

  const { error } = ordersSchema.validate(req.body);

  if (error) {
    throw new ExError(error.details[0].message, 404);
  }

  console.log("next before");

  next();
});
