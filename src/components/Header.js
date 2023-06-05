import React from 'react'
import logo from "../logo.svg"
import "./Header.css"

const Header = () => {
  return (
    <>
    <header className="p-3 header-shadow">
    <div className="container headerContainer">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none headerLogo">
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-md-0">
          <li><a href="/" className="nav-link px-2 headerNameStyle">MEN</a></li>
          <li><a href="/" className="nav-link px-2 headerNameStyle">WOMEN</a></li>
          <li><a href="/" className="nav-link px-2 headerNameStyle">KIDS</a></li>
          <li><a href="/" className="nav-link px-2 headerNameStyle">HOME & LIVING</a></li>
          <li><a href="/" className="nav-link px-2 headerNameStyle">BEAUTY</a></li>
          <li><a href="/" className="nav-link px-2 headerNameStyle">STUDIO <sup className='textSupNew'>NEW</sup></a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header