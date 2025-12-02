const express = require("express");
const AsyncWrap = require("../utils/wrapAsync");
const Positions = require("../models/positions.model");
const ExError = require("../utils/ExError");

const router = express.Router();

router.route("/").get(
  AsyncWrap(async (req, res) => {
    const positions = await Positions.find({});

    if (positions.length == 0) throw new ExError("No positions found.", 404);

    res.status(200).json({
      message: "Positions found successfully!",
      statusCode: 200,
      status: true,
      data: positions,
    });
  })
);

module.exports = router;
