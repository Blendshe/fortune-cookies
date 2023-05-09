const fortunes = require("./data.json");

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.json("hello from fortune-cookies root");
});

app.get("/random", (request, response) => {
  const random = Math.floor(Math.random() * fortunes.length);

  response.json(fortunes[random].fortune);
});

app.listen(PORT, () => {
  console.log("App is listening on PORT " + PORT);
});
