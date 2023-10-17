const express = require("express");

const router = express.Router()

const empController = require("../controller/empController")

router.post("/emp",empController.postEmp)
router.get("/getemp",empController.getEmp)
router.put('/updateStatus/:id', empController.updateEmployeeStatus);
router.delete("/deleteemp/:id",empController.deleteEmp)

module.exports= router