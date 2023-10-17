require('dotenv').config();
const hrEmail = process.env.EMAIL;
const hrPassword = process.env.PASSWORD;
const HR = {hrEmail,hrPassword}
const hrLogin=(req,res)=>{
    const {email, password} = req.body;
    try {
        if(email === hrEmail  && password === hrPassword){
            return res.status(200).send(HR)
        }else{
            return res.status(500).send("credential error")
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

module.exports={
    hrLogin
}