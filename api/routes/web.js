const router = require("express").Router();
const db = require("../config/database");
const Web = require("../models/Web");

//upload web
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

    // const webPost = await new Promise((resolve, reject) => {
    //   const findAdmin = "SELECT * FROM user WHERE isAdmin = ?;";
    //   db.query(findAdmin, [isAdmin], (err, result) => {
    //     if (err) reject(err);
    //     if (result.length == isAdmin) {
    //       const addWeb =
    //         "INSERT INTO web (img, title, description, category, createdAt, phone, laptop, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    //       db.query(
    //         addWeb,
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
    const webPost = new Web(req.body);
    await webPost.save();
    res.status(200).json(webPost);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

//get web
router.get("/web", async (req, res) => {
  try {
    // const findWeb = await new Promise((resolve, reject) => {
    //   const web = "SELECT * FROM web ;";
    //   db.query(web, [], (err, result) => {
    //     if (err) reject(err);
    //     if (!result) {
    //       res.status(404).json("no web");
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // });
    const findWeb = await Web.find();
    if (findWeb.length > 0) {
      res.status(200).json(findWeb);
    } else {
      res.status(404).json("not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
