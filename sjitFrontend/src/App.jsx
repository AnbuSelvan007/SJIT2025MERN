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
function App() {
  

  return (
    <>
    <Navbar/> <hr />
     <Home name="Anbu" place="SJIT"/> <hr />
     <Gallery/> <hr />
     <Login/> <hr />
     <SignUp/> <hr />
     <Contact/> <hr />

    </>
  )
       
}

export default App
