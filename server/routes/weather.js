const express = require('express');
const router = express.Router();
const projects_controller = require('../controllers/weather');

router.get('/', projects_controller.getWeather);

module.exports = router;