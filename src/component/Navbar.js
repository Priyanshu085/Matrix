import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../images/logo.png';

function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className='container-logo' >
            <img src={logo} alt='LOGO' className='logo'/>
            <h1>Matrix</h1>
          </div>
          <div className='container-navbar'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="Featurepage">FEATURES</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="About">ABOUT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;