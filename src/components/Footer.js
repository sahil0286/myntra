import React from 'react'
import gp from "../media/googlePlay.png"
import as from "../media/appStore.png"
import o from "../media/original.png"
import re from "../media/replacement.png"
import fb from "../media/facebook.png"
import tw from "../media/twitter.png"
import insta from "../media/instagram.png"
import yt from "../media/youtube.png"
import "./Footer.css"

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='container footerBackgroundColor'>
    <footer className="pt-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-2">
        <p className='footerTitle' style={{fontWeight:"bold"}}>ONLINE SHOPPING</p>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Men</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Women</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Kids</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Home & Living</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Beauty</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Gift Cards</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Myntra Insider</Link></li>
        </ul>
        <br />
        <p className='footerTitle' style={{fontWeight:"bold"}}>USEFUL LINKS</p>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Blog</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Site Map</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Careers</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Corporate Information</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Whitehat</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-2">
        <p className='footerTitle' style={{fontWeight:"bold"}}>ONLINE SHOPPING</p>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Contact Us</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">FAQ</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">T&C</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Terms Of Use</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Track Orders</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Shipping</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Cancellation</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Returns</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Privacy policy</Link></li>
          <li className="nav-item mb-2"><Link to="/product" className="footerLink nav-link p-0 text-body-secondary">Grievance Officer</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-4 mb-2">
        <p className='footerTitle' style={{fontWeight:"bold"}}>EXPERIENCE MYNTRA APP ON MOBILE</p>
        <ul className="nav flex-column">
          <li className="nav-item mb-4">
            <img src={gp} style={{height:"45px"}} alt={gp}/>
            <img src={as} style={{height:"45px",marginLeft:"5px"}} alt={as}/>
          </li>
        <p className='footerTitle' style={{fontWeight:"bold"}}>KEEP IN TOUCH</p>
          <li className="nav-item mb-2">
            <img src={fb} style={{height:"20px"}} alt={fb}/>
            <img src={tw} style={{height:"20px",marginLeft:"10px"}} alt={tw}/>
            <img src={yt} style={{height:"20px",marginLeft:"10px"}} alt={yt}/>
            <img src={insta} style={{height:"20px",marginLeft:"10px"}} alt={insta}/>
          </li>
        </ul>
      </div>
      
      <div className="col-6 col-md-4 mb-2">
        <ul className="nav flex-column">
          <li className="row nav-item mb-2">
            <img className='col-3'style={{height:"55px"}} src={o}  alt={o}/>
            <p className='col-9 footerLink'><span style={{fontWeight:"bold"}}>100% ORIGINAL</span> guarantee for all products at myntra.com</p>
          </li>
          <li className="row nav-item">
            <img className='col-3' style={{height:"55px"}} src={re}  alt={re}/>
            <p className='col-9 footerLink'><span style={{fontWeight:"bold"}}>Return within 14days</span> of receiving your order</p>
          </li>
        </ul>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between my-4 border-top">
      <p>© 2023 Created By <a href="https://www.linkedin.com/in/sahilfakir/" target='blank'>Sahil Fakir</a>, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-body-emphasis" to="/product"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="/product"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis" to="/product"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></Link></li>
      </ul>
    </div>
  </footer>
  </div>
    </>
  )
}

export default Footer