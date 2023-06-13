import React from 'react'
import MainAd_1 from "../media/MainAd_1.jpg"
import MainAd_2 from "../media/MainAd_2.gif"
import MainAd_3 from "../media/MainAd_3.gif"
import MainAd_4 from "../media/MainAd_4.jpg"
import MainAd_5 from "../media/MainAd_5.jpg"
import MainAd_6 from "../media/MainAd_6.gif"
import MainAd_7 from "../media/MainAd_7.gif"
import MainAd_8 from "../media/MainAd_8.jpg"
import MainAd_9 from "../media/MainAd_9.jpg"
import MainAd_10 from "../media/MainAd_10.png"
import MainAd_11 from "../media/MainAd_11.jpg"
import MainAd_12 from "../media/MainAd_12.jpg"

import { Link } from 'react-router-dom'

const MainAd = () => {
  return (
    <>
        <div className="container-fluid"style={{width:"100%", paddingLeft:"3%", marginTop:"20px"}}>
            <div className=" row d-flex flex-wrap" style={{width:"100%"}}>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_1} style={{width:"100%"}} alt="MainAd_1" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_2} style={{width:"100%"}} alt="MainAd_2" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_3} style={{width:"100%"}} alt="MainAd_3" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_4} style={{width:"100%"}} alt="MainAd_4" /></Link>
            </div>
            <div className="row d-flex flex-wrap" style={{width:"100%"}}>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_5} style={{width:"100%"}} alt="MainAd_5" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_6} style={{width:"100%"}} alt="MainAd_6" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_7} style={{width:"100%"}} alt="MainAd_7" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_8} style={{width:"100%"}} alt="MainAd_8" /></Link>
            </div>
            <div className="row d-flex flex-wrap" style={{width:"100%"}}>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_9} style={{width:"100%"}} alt="MainAd_9" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_10} style={{width:"100%"}} alt="MainAd_10" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_11} style={{width:"100%"}} alt="MainAd_11" /></Link>
                <Link className="col" style={{padding:"0"}} to="/product"><img src={MainAd_12} style={{width:"100%"}} alt="MainAd_12" /></Link>
            </div>
        </div>
    </>
  ) 
}

export default MainAd