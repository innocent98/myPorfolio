const router = require("express").Router();

const authRoute = require("./auth");
const featuredRoute = require("./featured");
const apiRoute = require("./api");
const mobileRoute = require("./mobile");
const webRoute = require("./web");
const testimonialRoute = require("./testimonial");

router.use("/api/auth", authRoute);
router.use("/api/featured", featuredRoute);
router.use("/api/api", apiRoute);
router.use("/api/mobile", mobileRoute);
router.use("/api/web", webRoute);
router.use("/api/testimonial", testimonialRoute);

module.exports = router;
