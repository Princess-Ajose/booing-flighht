// this helps to define a path of the server. this is routes your page
const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.post('/', controller.flight_create_get) 


router.get('/', controller.flight_list);

router.post('/', controller.flight_detail);

router.get('/', book_controller.flight_update);


router.post('/', book_controller.flight_delete)


module.exports = router;