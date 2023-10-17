const mongoose = require("mongoose");
const empschema = require("../migration/emp.json")
const EmployeeSchema=new mongoose.Schema(empschema);

module.exports= mongoose.model("Employee",EmployeeSchema)
