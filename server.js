const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
  method: "GET,POST,DELETE,PUT,PATCH",
  credential: true,
  exposedHeaders: "[x-auth-token]",
};

bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
dotenv.config();

const startServer = () => {
  try {
    app.use(cors(corsOptions));
    app.listen(process.env.PORT || 8082, (error) => {
      if (error) {
        console.log("Server is not running", process.env.PORT);
      }
      console.log(
        "Server is connection running successfully http://localhost:" +
          process.env.PORT
      );
    });
  } catch (error) {
    console.log("Server is not enabled try again" + process.env.PORT);
  }
};
module.exports = { startServer };
