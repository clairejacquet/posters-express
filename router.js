const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.use(controllers.loadPostersMiddleware);
router.get('/poster/:id', controllers.loadPosterSingleMiddleware);

router.get('/', controllers.homePage);

module.exports = router;
