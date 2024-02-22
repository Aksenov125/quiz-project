const router = require('express').Router();

const authApiRouter = require('./api/authApi.route');
const themesApiRouter = require('./api/themesApi.route');
const questionApiRouter = require('./api/questionApi.route');

router.use('/api/auth', authApiRouter);
router.use('/api/themes', themesApiRouter);
router.use('/api/question', questionApiRouter);

module.exports = router;
