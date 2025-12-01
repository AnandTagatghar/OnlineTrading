const { connect } = require("mongoose");

module.exports.dbConnect = async (url) => {
  try {
    await connect(url);
    console.log(`DB connection success`);
  } catch (error) {
    console.error(`DB Connection failed: ${error.message}`);
    process.exit();
  }
};
