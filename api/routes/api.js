const router = require("express").Router();
const db = require("../config/database");
const Api = require("../models/Api");

//upload api
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

    // const apiPost = await new Promise((resolve, reject) => {
    //   const findAdmin = "SELECT * FROM user WHERE isAdmin = ?;";
    //   db.query(findAdmin, [isAdmin], (err, result) => {
    //     if (err) reject(err);
    //     if (result.length == isAdmin) {
    //       const addApi =
    //         "INSERT INTO api (img, title, description, category, createdAt, phone, laptop, link) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    //       db.query(
    //         addApi,
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
    const apiPost = new Api(req.body);
    await apiPost.save();
    res.status(200).json(apiPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//get api
router.get("/api", async (req, res) => {
  try {
    // const findApi = await new Promise((resolve, reject) => {
    //   const api = "SELECT * FROM api ;";
    //   db.query(api, [], (err, result) => {
    //     if (err) reject(err);
    //     if (!result) {
    //       res.status(404).json("no api");
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // });
    const findApi = await Api.find();
    if (findApi.length > 0) {
      res.status(200).json(findApi);
    } else {
      res.status(404).json("not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
