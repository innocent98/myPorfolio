const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index");
// const multer = require("multer");
// const firebase = require("./firebase");
const path = require("path");
const db = require("./config/database");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//use router
app.use(router);

//server connection
app.listen(process.env.PORT || 8001, () => {
  console.log(`server is running on port 8001`);
});
