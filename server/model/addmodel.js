const mongoose = require("mongoose");
const addempschema = require("../migration/addemp.json")
const AddEmpModel = new mongoose.Schema(addempschema)
module.exports = mongoose.model("Register Emp",AddEmpModel) 