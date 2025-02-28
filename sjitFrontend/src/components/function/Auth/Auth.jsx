import React, { useState } from "react";
import "./Auth.css"; // Import the CSS file
import axios from "axios";
import Login from "../Login";
import { useNavigate } from "react-router-dom";

const Auth= () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", firstname: "",phone:"",lastname:""});
  const navigate=useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", firstname: "",phone:"",lastname:"" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Signing up...", formData);
    if(!isLogin)
    {
       const req= await axios.post("https://servertesting-iz12.onrender.com/signup",formData);
       const isSignUp=req.data.isSignUp;
       const message=req.data.message;
       alert(message);
       if(isSignUp)
        navigate("/Home")
    }
    else{
      // try{
          console.log(formData)
           const res= await axios.post("http://localhost:5000/signin",formData);
           const isSignIn=res.data.isSignIn;
           const message=res.data.message;
           alert(message);
           if(isSignIn)
            navigate("/Home")
      //   }
      // catch(err){
      //     console.log("failed")
      //     alert('invalid email/password')
      // }
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit} method="post">
          {!isLogin && (
            <>
            <input
              type="text"
              name="firstname"
              placeholder="fname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
              <input
          type="text"
          name="lastname"
          placeholder="lname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
            <input
            type="text"
            name="phone"
            placeholder="phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

        
        </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span onClick={toggleForm}>{isLogin ? " Sign Up" : " Login"}</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
