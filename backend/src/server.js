const { dbConnect } = require("./config/dbConnect");
const app = require("./app");

require("dotenv").config();

dbConnect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server listening at port : http://localhost:${process.env.PORT}`
    );
  });
});
