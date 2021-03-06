const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sql = require("./db/conexion");
const app = express();

//Views
const pokemon = require("./view/pokemon");
const user = require("./view/user");

//Midlewares
app.use(express.json());
app.use(cors());

app.use('/', express.static('public'));

async function serverStart() {
  await sql.authenticate();
  app.listen(3001, () => {
    console.log("Server start on http:localhost:3001");
  });
}

serverStart();
pokemon(app);
user(app);
