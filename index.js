/*  creating a rest API that has the following features.
   1. book a flight 
   2. get all flight  || fetching all flight
   3. get a single flight || fetching a single flight
   4. update flight
   5. delete flight.
 */
/* the flight should have this followings it should be in objects form
 {
    title: 'flight to canada',
    time: 1pm,
    price: 26000,
    date: '26-06-2022'
    }
    CRUD - create, read, update & delete.
   
// const server = app.listen(process.env.PORT || 3000, () => {
//    console.log("Great, I am running at PORT 3000")
// })
//  app.listen(3000, () => {
//     console.log(`server is up and running at port`)
//  });
// ServerResponse
} */

// const { Router } = require("express");
const express = require("express");
const app = express()
const {
   json
} = ("express")
// to setup the express appilication method || initialise express

const {
   ServerResponse
} = require("http");
const http = require("http").createServer(app);
const flights = require("./controllers/flightController");
const models = require("./models/flight");
const routes = require("./routes/flightRoute");
const port = process.env.PORT || 3000;
ServerResponse




// to book a flight

const flightDetails = {
   title: 'flight to canada',
   time: '1pm',
   price: 26000,
   date: '26-06-2022'
}

function flightdata() {
   return flightDetails;
};
flightdata();


app.use(express.json());


app.use("/", routes) 


app.use("/", flights);

app.use("/", models);





app.get("/", (req, res) => {
   res.json('Hello World');
});


// app.get("/book", (req, res) => {
//    res.send('there are four books in store');
// });


// app.post("/", function (req, res) {
//    res.send('this is a post request')
// });
// to get all flights



app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
