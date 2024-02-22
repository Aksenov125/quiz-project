const router = require('express').Router();

const authApiRouter = require('./api/authApi.route');
const restsApiRouter = require('./api/restsApi.route');

router.use('/api/auth', authApiRouter);
router.use('/api/rests', restsApiRouter)

module.exports = router;
