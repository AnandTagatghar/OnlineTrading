const express = require("express");
const AsyncWrap = require("../utils/wrapAsync");
const Holdings = require("../models/handlings.model");
const ExError = require("../utils/ExError");

const router = express.Router();

router.route("/").get(
  AsyncWrap(async (req, res) => {
    const holdings = await Holdings.find({});

    if (holdings.length == 0) throw new ExError("No holdings found!", 404);

    res.status(200).json({
      message: "Holdings found successfully",
      statusCode: 200,
      status: true,
      data: holdings,
    });
  })
);

module.exports = router;
