// const { abort } = require("process")
const {
  json
} = require("express");
const flight = require("../models/flight")

const {
  body
} = require("express-validator");

// this is the controller
// book a flight
exports.flight_create_get = function (req, res, next) {
  res.render('flight_form', {
    title: 'Book a flight'
  });
};

// get all flight
exports.flight_list = function (req, res, next) {

  Flight.find()
    .sort([
      ['family_name', 'ascending']
    ])
    .exec(function (err, list_flights) {
      if (err) {
        return next(err);
      }
      // Successful, so render.
      res.render('flight_list', {
        title: 'Flight List',
        flight_list: list_flights
      });
    });

};
// exports.getAllFlights = (req, res) => {
//   try {
//     const flights = flight
//     res.status(200).json(models);

//   } catch (error) {
//     res.status(500).json(flight)
//   }

//   // console.log("example")
//   // res.send("Flight example")
// }

// get  single flight
exports.flight_detail = function (req, res, next) {

  async.parallel({
    flight: function (callback) {
      Flight.findById(req.params.id)
        .exec(callback)
    },
    flights_booking: function (callback) {
      flight.find({
          'flight': req.params.id
        }, 'title summary')
        .exec(callback)
    },
  }, function (err, results) {
    if (err) {
      return next(err);
    } // Error in API usage.
    if (results.flight == null) { // No results.
      let err = new Error('Flight not found');
      err.status = 404;
      return next(err);
    }
    // Successful, so render.
    res.render('flight_detail', {
      title: 'flight to canada',
      time: '1pm',
      price: 26000,
      date: '26-06-2022'
    });
  });

};

// update flight

exports.flight_update = function (req, res, next){

  async.parallel({
    flight: function (callback) {
      Flight.findById(req.params.id)
        .exec(callback)
    },
  }, function (err, results){
    if (err) {
      return next(err);
    } // Error in API usage.
    if (results.flight == Object()) { // No results.
      let err = new Error('file updated');
      err.status = 404;
      return next(err);
    }
  });
};


// delete flight

exports.flight_delete = (req, res) =>  {
  try {
    res.send('you have deleted your flight')
    res.status(200)
  } catch (error) {
    res.status(404)
  }

};
