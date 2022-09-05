"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');
const PORT = process.env.PORT || 3031;

app.use(cors())
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).send("Hello World");
});

//http://localhost:3030/person
app.post("/person", (req, res) => {
  const person = req.body;
  person.age=parseInt(req.body.age) + 5;
  res.status(200).json(person);
});

function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

module.exports = {
  app,
  start,
};
