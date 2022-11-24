const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const multer = require("multer");
const path = require("path");

dotenv.config();

// database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("database connected"))
  .catch((err) => console.log(err));
  
  // get images
  app.use("/images", express.static(path.join(__dirname, "public/images")));

//   middlewares
app.use(morgan("common"));
app.use(cors());
app.use(helmet());
app.use(express.json());

// flie upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

// router
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 8300, () => {
  console.log("server listening to port 8300");
});
