const mongoose = require("mongoose");

const express = require("express");
const rootRouter = require("./routesController/index");
const router = require("./routesController/routesListing");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(rootRouter);
app.use(router);

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

module.exports = app;
