const hrcontroller = require("../controller/hrCotroller");
const express = require("express");

const router = express.Router();

router.post("/hrlogin",hrcontroller.hrLogin)

module.exports=router