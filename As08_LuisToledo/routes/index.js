const express = require("express");
const accountRouter = require("./account.routes.js");
const errorHandler = require("../middlewares/errorHandler.js");

const app = express();

app.use(express.json());

app.use("/account", accountRouter);

app.use(errorHandler);
module.exports = app;
