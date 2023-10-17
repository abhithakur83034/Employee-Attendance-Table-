const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json());
app.use(cors())

const empRoute = require("./route/empRoute")
const addRoute = require("./route/addRoute")
const hrRoute = require("./route/hrRoute")


app.use("/api",empRoute)
app.use("/api",addRoute)
app.use("/api",hrRoute)

module.exports = app;