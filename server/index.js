const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/repos", (request, response) => {
  const { user } = request.query;
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(function (res) {
      console.log(res);
      return response.json(res.data);
    })
    .catch(function (err) {
      console.log(err);
      return response.status(400).send({ error: "Usuário não encontrado" });
    });
});

app.listen(8080);
