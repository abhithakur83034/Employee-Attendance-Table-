const express = require("express");

const router = express.Router()

const addController = require("../controller/addempcontroller")

router.post("/register",addController.register)


module.exports= router