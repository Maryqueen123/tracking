import React from 'react'
import Nav from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     duration:2000,
  //     once:true
  //   });
  // }, [])
  return (
    <>
<Nav/>
<Router>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/register' element={<Register/>}/>
  </Routes>
</Router>
<Footer/>
    </>
  )
}

export default App