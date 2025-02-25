const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt=require('bcrypt')
const app = express();
const path = require("path");

const Signup = require("./model/SignUp");
const signup_schema = require("./model/SignUp");
// Define Port
const PORT = 5000;
dotenv.config();
mdb
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log("check your connection String", err));

app.use(express.json());
// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server!");
});


//signUP in dataBase
app.post("/signup", async(req, res) => {
  try {
    
    console.log(req.body);
    const { firstName, lastName, phone, password, email } = req.body;
    const hashedpassword=await bcrypt.hash(password,10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      password:hashedpassword,
      email: email,
    });
     newSignup.save();
    console.log("saved successfully");
    res.status(201).json({ message: "signUP successful", isSignUP: true });
  } catch (err) {
    console.log(err);
    res.status(414).json({ message: "signUP unsuccessful", isSignUP: false });
  }
});

app.post('/signin',async(req,res)=>{
      const {email,password}=req.body;
      const data=await signup_schema.findOne({email})
      if(!data)
        res.status(404).json({message:"invalid user"})
      const isCorrect=await bcrypt.compare(password,data.password);
      if(isCorrect)
        res.status(201).json({message:"Login successful"})
      else
      res.status(414).json({message:"Login unsuccessful"})
      console.log(data)

     
})


// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
