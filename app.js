
const express = require("express");
// const serverless = require('serverless-http');
require('dotenv').config();
// const autocannon = require("autocannon");
const cors = require("cors");
const app = express();


const PORT = process.env.PORT || 3003;

// app configurations
app.set('port',PORT);

// establish http server connection
app.listen(PORT, () => { console.log(`App running on port ${PORT}`) });
app.get("/status", cors(), (req, res) => {
  const status = {
    id: "ALH001",
    name: "Utkarsh",
    company: "Audax Labs",
    Degination: "Developer",
    photo: "https://www.gla.ac.in/Nexus/download/photo/Utkarsh-Ojha.jpg",
    friends: [

        "Bhauk",
        "nikhil",
        "Harsh",
        "Amarendra",
        "Nirbhaya",
        "Mridul",
        "Yashraj"
    ],
    contact:"91952989",
    orderiD:"SWWI1234",
    orderDiscription: "ALI196"
};
res.send(status);

});

