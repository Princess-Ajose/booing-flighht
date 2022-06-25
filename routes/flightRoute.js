// this helps to define a path of the server. this is routes your page
const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example)

module.exports = router;

