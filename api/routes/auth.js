const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// register a user
router.post("/register", async (req, res) => {
  const userExist = await User.findOne({ username: req.body.username });
  try {
    if (userExist) {
      return res.status(400).json("Username already exists");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        picture: req.body.picture,
        password: hash,
      });
      await newUser.save();
      res.status(200).json("Success");
    }
  } catch (err) {
    res.status(500).json("Error occured");
    // console.log(err);
  }
});

// login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  try {
    if (!user) {
      return res.status(400).json("Username does not exists");
    } else if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json("Password does not match");
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json("Error occured");
    // console.log(err);
  }
});

module.exports = router;
