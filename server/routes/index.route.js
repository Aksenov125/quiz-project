const router = require("express").Router();
const authApiRouter = require("./api/authApi.route");
const themesApiRouter = require("./api/themesApi.route");

router.use("/api/auth", authApiRouter);
router.use('/api', themesApiRouter);


module.exports = router;
