const AddEmpmodel = require("../model/addmodel");

const register = async (req, res) => {
  console.log(req.body);
  
  try {
    const existingUser = await AddEmpmodel.findOne({ email: req.body.email });
    
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered", status: "fail" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", status: "error" });
  }

  try {
    const newUser = new AddEmpmodel(req.body);
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", status: "error" });
  }
};

module.exports = {
  register
};
