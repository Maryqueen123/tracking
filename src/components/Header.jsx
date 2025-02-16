import React from 'react'
import Logo from '../assets/smlog.png'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
  <a className="navbar-brand" href="#"><img src={Logo} alt="/" className='img-fluid' style={{height:40}} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="./about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="./achievements">Achievements</a>
        </li>
    </ul>
      <a className="btn btn-warning me-3" href='./login' type="submit">Login</a>
        <a className="btn btn-warning" href='./register' type="submit">Register</a>
      
    </div>
  </div>
</nav>

      
    </>
  )
}

export default Header