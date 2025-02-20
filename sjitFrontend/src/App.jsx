import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './components/function/Contact'
import Home from './components/function/Home';
import Gallery from './components/function/Gallery';
import Login from './components/function/Login';
import SignUp from './components/function/SignUp';
import Classcomp from './components/class/Classcomp'
import Navbar from './components/function/Navbar'
import About from './components/function/About'
import UseEffectApi from './components/function/UseEffectApi'
import Project from './components/function/Project'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import UseMemo from './components/function/UseMemo'
function App() {
  

  return (
   
    
    <BrowserRouter>
    <Navbar/> <hr />
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home name="Anbu" place="SJIT" />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/useEffectApi" element={<UseEffectApi/>} />
      <Route path="/useMemo" element={<UseMemo/>} />

    </Routes>

     </BrowserRouter>
  )
       
}

export default App
