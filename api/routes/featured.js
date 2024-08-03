const router = require("express").Router();
const db = require("../config/database");
const Featured = require("../models/Featured");

//upload featured
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

    // const featuredPost = await new Promise((resolve, reject) => {
    //   const findAdmin = "SELECT * FROM user WHERE isAdmin = ?;";
    //   db.query(findAdmin, [isAdmin], (err, result) => {
    //     if (err) reject(err);
    //     if (result.length == isAdmin) {
    //       const addFeatured =
    //         "INSERT INTO featured (img, title, description, category, createdAt, phone, laptop, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    //       db.query(
    //         addFeatured,
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
    const featuredPost = new Featured(req.body);
    await featuredPost.save();
    res.status(200).json(featuredPost);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//get featured
router.get("/featured", async (req, res) => {
  try {
    // const findFeatured = await new Promise((resolve, reject) => {
    //   const featured = "SELECT * FROM featured ;";
    //   db.query(featured, [], (err, result) => {
    //     if (err) reject(err);
    //     if (!result) {
    //       res.status(404).json("no featured");
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // });
    const findFeatured = await Featured.find();
    if (findFeatured.length > 0) {
      res.status(200).json(findFeatured);
    } else {
      res.status(404).json("not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
