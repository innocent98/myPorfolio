const router = require("express").Router();
const db = require("../config/database");
const Mobile = require("../models/Mobile");

//upload mobile
router.post("/upload", async (req, res) => {
  try {
    const createdAt = new Date();
    const img = req.body.img;
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    const isAdmin = req.body.isAdmin;
    const phone = req.body.phone;
    const laptop = req.body.laptop;
    const link = req.body.link;

    // const mobilePost = await new Promise((resolve, reject) => {
    //   const findAdmin = "SELECT * FROM user WHERE isAdmin = ?;";
    //   db.query(findAdmin, [isAdmin], (err, result) => {
    //     if (err) reject(err);
    //     if (result.length == isAdmin) {
    //       const addMobile =
    //         "INSERT INTO mobile (img, title, description, category, createdAt, phone, laptop, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    //       db.query(
    //         addMobile,
    //         [img, title, description, category, createdAt, phone, laptop, link],
    //         (err, result) => {
    //           if (err) reject(err);
    //           resolve(result);
    //         }
    //       );
    //     } else {
    //       res.status(403).json("only admin is granted permission!");
    //     }
    //   });
    // });
    const mobilePost = new Mobile(req.body);
    await mobilePost.save();
    res.status(200).json(mobilePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get mobile
router.get("/mobile", async (req, res) => {
  try {
    // const findMobile = await new Promise((resolve, reject) => {
    //   const mobile = "SELECT * FROM mobile ;";
    //   db.query(mobile, [], (err, result) => {
    //     if (err) reject(err);
    //     if (!result) {
    //       res.status(404).json("no mobile");
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // });
    const findMobile = await Mobile.find();
    if (findMobile.length > 0) {
      res.status(200).json(findMobile);
    } else {
      res.status(404).json("not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
