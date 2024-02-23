const router = require("express").Router();
const authApiRouter = require("./api/authApi.route");
const themesApiRouter = require("./api/themesApi.route");
const scoreApiRouter = require("./api/scoreApi.route");

router.use("/api/auth", authApiRouter);
router.use("/api", themesApiRouter);
router.use("/api", scoreApiRouter);

module.exports = router;
