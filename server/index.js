const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const creatures = require("./creatures");

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get("/creatures", (request, response) => {
    response.status(200).send(creatures);
});

app.post("/add-creature", (request, response) => {
    console.log(request.body);
    creatures.push(request.body);
    response.status(200).send(creatures);
});

app.listen(3005, () => {
    console.log("running on port 3005")
})