import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/function/Home';
import Login from './components/function/Login';
import SignUp from './components/function/SignUp';
import Classcomp from './components/class/Classcomp'
import Navbar from './components/function/Navbar'
import About from './components/function/About'
import UseEffectApi from './components/function/UseEffectApi'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import UseMemo from './components/function/UseMemo'
import Usecallback from './components/function/Usecallback'
import UseMemoize from './components/function/UseMemoize'
import Hoc from './components/function/HOC/Hoc'
import Parent from './components/function/Memo/Parent'
import LazyLoad from './components/function/Memo/LazyLoad';
import Student from './components/function/Context/Student';
import Auth from './components/function/Auth/Auth';
function App() {
  

  return (
   
    
    <BrowserRouter>
    <Navbar/> <hr />
    <Routes>
      <Route path="/" element={<Auth/>} />
      <Route path="/SignUp" element={<Login />} />
      <Route path="/Home" element={<Home name="Anbu" place="SJIT" />} />
      <Route path="/about" element={<About />} />
      <Route path="/useEffectApi" element={<UseEffectApi/>} />
      <Route path="/useMemo" element={<UseMemo/>} />
      <Route path="/usecallback" element={<Usecallback/>} />
      <Route path="/usecustom" element={<UseMemoize/>} />
      <Route path="/Hoc" element={<Hoc/>} />
      <Route path="/memo" element={<Parent/>} />
      <Route path="/lazy" element={<LazyLoad/>} />
      <Route path="/ContextAPI" element={<Student/>} />

    </Routes>

     </BrowserRouter>
  )
       
}

export default App
