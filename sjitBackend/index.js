const express = require("express");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const bcrypt=require('bcrypt')
const app = express();
const path = require("path");
const cors = require('cors');
const jwt = require("jsonwebtoken");
app.use(cors());

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
    const { firstName, lastName, phone, password, email } = req.body;
    const isExists= await signup_schema.findOne({email})
    if(isExists)
      return  res.status(200).json({ message: "signUP unsuccessful email already exists", isSignUp: false });
    
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
    res.status(201).json({ message: "signUP successful", isSignUp: true });
 
  } catch (err) {
    console.log(err);
    res.status(414).json({ message: "signUP unsuccessful", isSignUp: false });
  }

});


function verifyTok(req, res, next){
  const token = req.headers.authorization; // Correct way to get the token
  console.log("middleware checked");
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }


  
  try{
      console.log( token);
     const payload=jwt.verify(token,process.env.SECRET_KEY)
      console.log(payload.firstname)
      next();
  }
  catch(err)
  {
    res.send("either token is expired/ token is it self wrong")
    console.log(err)
  }
  // Proceed to the next middleware

};

app.get('/signupdev', verifyTok, (req, res) => {
 
  res.json({ message: "Token verified, user signed up successfully." });
});

app.post('/signin',async(req,res)=>{
      const {email,password}=req.body;
      const data=await signup_schema.findOne({email})
      if(!data)
        return res.status(200).json({message:"invalid user email",isSignIn:false})

      const isCorrect=await bcrypt.compare(password,data.password);
      const payload={
              firstname:data.firstName,
              email:data.email
            }
            const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"10m"})
      if(isCorrect)
        res.status(201).json({message:"Login successful",isSignIn:true,token:token})
      else
        res.status(200).json({message:"Wrong Password",isSignIn:false})
      console.log(data)

     
})
// app.post("/signin", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const data = await signup_schema.findOne({ email });
//     if (!data) {
//       return res.status(200).json({ message: "Invalid user email", isSignIn: false });
//     }

//     // Compare passwords
//     const isCorrect = await bcrypt.compare(password, data.password);
//     if (!isCorrect) {
//       return res.status(200).json({ message: "Wrong Password", isSignIn: false });
//     }

//     // Login successful'
//     const payload={
//       firstname:data.firstName,
//       email:data.email
//     }
//     const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"10m"})
//     console.log(token)
//     res.status(200).json({ message: "Login successful", isSignIn: true,token:token });
    
//     console.log("User logged in:", data.email);
//   } catch (error) {
//     console.error("Error during sign-in:", error);
//     res.status(500).json({ message: "Internal Server Error", isSignIn: false });
//   }
// });



// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
