import React from 'react'
import logo from "../logo.svg"
import "./Header.css"
import { FaRegUser } from "react-icons/fa"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { AiOutlineHeart } from "react-icons/ai"

const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary headerShadow">
            <div className="container-fluid headerContainer">
                <a className="navbar-brand d-flex align-items-center mb-2 mb-lg-0 text-decoration-none headerLogo" href="/">
                    <img src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a href="/" className="nav-link headerNameStyle">MEN</a></li>
                    <li className="nav-item"><a href="/" className="nav-link headerNameStyle">WOMEN</a></li>
                    <li className="nav-item"><a href="/" className="nav-link headerNameStyle">KIDS</a></li>
                    <li className="nav-item"><a href="/" className="nav-link headerNameStyle">HOME & LIVING</a></li>
                    <li className="nav-item"><a href="/" className="nav-link headerNameStyle">BEAUTY</a></li>
                    <li className="nav-item"><a href="/" className="nav-link headerNameStyle">STUDIO <sup className='textSupNew'>NEW</sup></a></li>
                </ul>
                <form className="d-flex align-items-center" role="search">
                    <input className="form-control me-2 searchBar" type="search" placeholder="🔍        Search for products, brands and more" aria-label="Search"/>
                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li><a href="/" className="nav-link text-secondary mt-2"><FaRegUser className='bi d-block mx-auto' style={{fontSize:"18px"}}/><span className='headerIcon' style={{fontSize:"12px"}}>Profile</span></a></li>
                        <li><a href="/" className="nav-link text-secondary mt-2"><AiOutlineHeart className='bi d-block mx-auto' style={{fontSize:"20px"}}/><span className='headerIcon'>Wishlist</span></a></li>
                        <li><a href="/" className="nav-link text-secondary mt-2"><HiOutlineShoppingBag className='bi d-block mx-auto' style={{fontSize:"21px"}}/><span className='headerIcon'>Bag</span></a></li>
                    </ul>
                </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header