const addmodel = require("../model/addmodel");
const empModel = require("../model/empModel");

const postEmp = async (req, res) => {
  try {
    const user = await addmodel.findOne({ code: req.body.code });

    if (user) {
      const { name, email } = user;
      const { code, day } = req.body;
      const emp = await empModel.findOne({ code: code, day: day });

      // console.log("Employee found:", emp);

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const currentDayIndex = new Date().getDay();
      const currentDay = days[currentDayIndex];
      // console.log("Current day:", currentDay);

      if (emp) {
        if (emp.day === currentDay) {
          emp.logouttime = req.body.time;
          await emp.save();
          // console.log("Logout time updated");
          res.status(200).json({ message: "logout", status: "remove" });
        } else {
          const addall = {
            code,
            name,
            email,
            logintime: req.body.time,
            logouttime: null,
            day,
            status : req.body.status
          };
          const emplog = await empModel.insertMany([addall]);
          // console.log("New employee record created:", emplog);
          res.status(200).json({ message: emplog, status: "login" });
        }
      } else {
        const addall = {
          code,
          name,
          email,
          logintime: req.body.time,
          logouttime: null,
          day,
          status : req.body.status
        };
        const emplog = await empModel.insertMany([addall]);
        // console.log("New employee record created:", emplog);
        res.status(200).json({ message: emplog, status: "login" });
      }
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(error);
  }
};


const getEmp = async(req,res)=>{
  try {
    const emp = await empModel.find(req.body)
    // console.log(emp);
    res.status(200).send(emp)
  } catch (error) {
    res.status(500).send("internal server error")
  }
}




const updateEmployeeStatus = async (req, res) => {
  try {
    const { id } = req.params; 
    // console.log(id)
    const { status } = req.body; 
  //  console.log(status)
    // Find and update the employee by ID
    const updatedEmployee = await empModel.findByIdAndUpdate(
      id,
      { $set: { status: status } },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    return res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


const deleteEmp=async(req,res)=>{
  try {
    const delEmp = await empModel.deleteOne({_id : req.params.id})
    res.status(200).json({delEmp,status:"deleted"})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
  postEmp,
  getEmp,
  updateEmployeeStatus,
  deleteEmp,
};
