// 
const express = require("express")

const app = express()

// const port = process.env.PORT || 3000;

// get request method used to fetch data from a sever or API
// post request method used to send data to a server or API
// put request method used to update data from a server or API
// delete request method used to delete data from a server or API

app.get("/", (req, res) => {
   res.send('Hello World');
});


app.get("/book", (req, res) => {
   res.send('there are four books in store');
});


app.post("/", function (req, res) {
   res.send('this is a post request')
});


app.listen(3000, () => {
   console.log(`server is up and running at port`)
});