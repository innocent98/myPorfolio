const router = require("express").Router();
const db = require("../config/database");
const Testimonial = require("../models/Testimonial");

//upload testimonial
router.post("/submit-testimony", async (req, res) => {
  try {
    const createdAt = new Date();
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const testimony = req.body.testimony;
    const ig = req.body.ig;
    const tw = req.body.tw;
    const picture = req.body.picture;

    // const testimonial = await new Promise((resolve, reject) => {
    //   const postTestimony =
    //     "INSERT INTO testimonial (firstName, lastName, company, testimony, ig, tw, picture, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
    //   db.query(
    //     postTestimony,
    //     [firstName, lastName, company, testimony, ig, tw, picture, createdAt],
    //     (err, result) => {
    //       if (err) reject(err);
    //       resolve(result);
    //     }
    //   );
    // });
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(200).json(testimonial);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get testimonies
router.get("/testimony", async (req, res) => {
  try {
    // const testimonial = await new Promise((resolve, reject) => {
    //   const testimony = "SELECT * FROM testimonial ;";
    //   db.query(testimony, [], (err, result) => {
    //     if (err) reject(err);
    //     if (!result) {
    //       res.status(404).json("no testimony");
    //     } else {
    //       resolve(result);
    //     }
    //   });
    // });
    const testimonial = await Testimonial.find();
    if (testimonial.length > 0) {
      res.status(200).json(testimonial);
    } else {
      res.status(404).json("not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
