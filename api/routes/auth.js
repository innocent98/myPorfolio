const router = require("express").Router();
const bcrypt = require("bcrypt");
const db = require("../config/database");
const User = require("../models/User");

//user registration
router.post("/register", async (req, res) => {
  try {
    //generate a new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a new user
    const createdAT = new Date();
    const password = hashedPassword;
    const email = req.body.email;
    const isAdmin = req.body.isAdmin;

    // const user = await new Promise((resolve, reject) => {
    //   const findUser = "SELECT * FROM user WHERE email = ?";
    //   db.query(findUser, [email], (err, result) => {
    //     if (err) reject(err);
    //     if (result.length == 0) {
    //       const addUser =
    //         "INSERT INTO user (email, password, createdAt, isAdmin) VALUES (?, ?, ?, ?);";
    //       db.query(
    //         addUser,
    //         [email, password, createdAT, isAdmin],
    //         (err, result) => {
    //           if (err) reject(err);
    //           resolve(result);
    //         }
    //       );
    //     } else {
    //       res.status(403).json("email exist, try another one");
    //     }
    //   });
    // });

    const user = await User.findOne({ email: email });
    if (!user) {
      const newUser = new User({
        email: email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json(newUser);
    } else {
      res.status(400).json("User already exist!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//login a user
router.post("/login", async (req, res) => {
  try {
    // const user = await new Promise((resolve, reject) => {
    //   const email = req.body.email;
    //   const password = req.body.password;
    //   const findEmail = "SELECT * FROM user WHERE email = ?";
    //   db.query(findEmail, [email], (err, result) => {
    //     if (err) reject(err);
    //     if (result.length == 0) {
    //       res.status(404).json("email does not exist!");
    //     } else {
    //       const hashedPassword = bcrypt.compareSync(
    //         password,
    //         result[0].password
    //       );
    //       console.log(hashedPassword);
    //       if (hashedPassword) {
    //         resolve(result);
    //       } else {
    //         res.status(403).json("invalid credentials");
    //       }
    //     }
    //   });
    // });
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Username does not exists");
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json("Password does not match");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a user
router.get("/user", async (req, res) => {
  const email = req.body.email;
  try {
    // const findUser = await new Promise((resolve, reject) => {
    //   const user = "SELECT * FROM user where email = ?;";
    //   db.query(user, [email], (err, result) => {
    //     if (err) reject(err);
    //     if (result.length == 0) {
    //       console.log("not found");
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // });

    const findUser = await User.findOne({ email: email });
    if (findUser) {
      res.status(200).json(findUser);
    } else {
      res.status(404).json("Not found");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
