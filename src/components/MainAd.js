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

const MainAd = () => {
  return (
    <>
        <div class="container-fluid"style={{width:"100%", paddingLeft:"3%", marginTop:"20px"}}>
            <div class=" row d-flex flex-wrap" style={{width:"100%"}}>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_1} style={{width:"100%"}} alt="MainAd_1" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_2} style={{width:"100%"}} alt="MainAd_2" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_3} style={{width:"100%"}} alt="MainAd_3" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_4} style={{width:"100%"}} alt="MainAd_4" /></a>
            </div>
            <div class="row d-flex flex-wrap" style={{width:"100%"}}>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_5} style={{width:"100%"}} alt="MainAd_5" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_6} style={{width:"100%"}} alt="MainAd_6" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_7} style={{width:"100%"}} alt="MainAd_7" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_8} style={{width:"100%"}} alt="MainAd_8" /></a>
            </div>
            <div class="row d-flex flex-wrap" style={{width:"100%"}}>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_9} style={{width:"100%"}} alt="MainAd_9" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_10} style={{width:"100%"}} alt="MainAd_10" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_11} style={{width:"100%"}} alt="MainAd_11" /></a>
                <a class="col" style={{padding:"0"}} href='/'><img src={MainAd_12} style={{width:"100%"}} alt="MainAd_12" /></a>
            </div>
        </div>
    </>
  ) 
}

export default MainAd