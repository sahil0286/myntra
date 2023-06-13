import React from 'react'
// part 1
import omgDeal from "../media/omgDeal.jpg"
import s1 from "../media/s1.png"
import s2 from "../media/s2.jpg"
import s3 from "../media/s3.jpg"
import s4 from "../media/s4.jpg"
import s5 from "../media/s5.jpg"
import s6 from "../media/s6.jpg"
import s7 from "../media/s7.jpg"
import s8 from "../media/s8.jpg"
import s9 from "../media/s9.jpg"
import s10 from "../media/s10.jpg"
import s11 from "../media/s11.jpg"
import s12 from "../media/s12.jpg"
import s13 from "../media/s13.jpg"
import s14 from "../media/s14.jpg"
import s15 from "../media/s15.jpg"
import s16 from "../media/s16.jpg"
import s17 from "../media/s17.jpg"
import s18 from "../media/s18.jpg"
import s19 from "../media/s19.jpg"
import s20 from "../media/s20.jpg"

// part 2

import l1 from "../media/l1.jpg"
import m1 from "../media/m1.jpg"
import m2 from "../media/m2.jpg"
import m3 from "../media/m3.jpg"
import m4 from "../media/m4.jpg"
import m5 from "../media/m5.jpg"
import m6 from "../media/m6.jpg"
import m7 from "../media/m7.jpg"
import m8 from "../media/m8.jpg"
import m9 from "../media/m9.jpg"
import m10 from "../media/m10.jpg"

// part 3

import k1 from "../media/k1.jpg"
import x1 from "../media/x1.jpg"
import x2 from "../media/x2.jpg"
import x3 from "../media/x3.jpg"
import x4 from "../media/x4.jpg"
import x5 from "../media/x5.jpg"
import x6 from "../media/x6.jpg"
import x7 from "../media/x7.jpg"
import x8 from "../media/x8.jpg"
import x9 from "../media/x9.jpg"
import x10 from "../media/x10.jpg"
import x11 from "../media/x11.jpg"
import x12 from "../media/x12.jpg"
import x13 from "../media/x13.jpg"
import x14 from "../media/x14.jpg"
import x15 from "../media/x15.jpg"
import x16 from "../media/x16.jpg"
import x17 from "../media/x17.jpg"
import x18 from "../media/x18.jpg"
import x19 from "../media/x19.jpg"
import x20 from "../media/x20.jpg"

// Part 4

import h1 from "../media/h1.jpg"
import g1 from "../media/g1.jpg"
import g2 from "../media/g2.png"
import g3 from "../media/g3.jpg"
import g4 from "../media/g4.jpg"
import g5 from "../media/g5.jpg"
import g6 from "../media/g6.jpg"
import g7 from "../media/g7.jpg"
import g8 from "../media/g8.jpg"
import g9 from "../media/g9.jpg"
import g10 from "../media/g10.png"

// Part 5

import y1 from "../media/y1.jpg"
import v1 from "../media/v1.jpg"
import v2 from "../media/v2.jpg"
import v3 from "../media/v3.jpg"
import v4 from "../media/v4.jpg"
import v5 from "../media/v5.jpg"
import v6 from "../media/v6.jpg"
import v7 from "../media/v7.jpg"
import v8 from "../media/v8.jpg"
import v9 from "../media/v9.jpg"
import v10 from "../media/v10.jpg"
import v11 from "../media/v11.jpg"
import v12 from "../media/v12.jpg"
import v13 from "../media/v13.jpg"
import v14 from "../media/v14.jpg"
import v15 from "../media/v15.jpg"
import v16 from "../media/v16.jpg"
import v17 from "../media/v17.jpg"
import v18 from "../media/v18.jpg"
import v19 from "../media/v19.jpg"
import v20 from "../media/v20.jpg"
import v21 from "../media/v21.jpg"
import v22 from "../media/v22.jpg"
import v23 from "../media/v23.jpg"
import v24 from "../media/v24.jpg"
import v25 from "../media/v25.jpg"
import v26 from "../media/v26.jpg"
import v27 from "../media/v27.jpg"
import v28 from "../media/v28.jpg"
import v29 from "../media/v29.jpg"
import v30 from "../media/v30.jpg"
import v31 from "../media/v31.jpg"
import v32 from "../media/v32.jpg"
import v33 from "../media/v33.jpg"
import v34 from "../media/v34.jpg"
import v35 from "../media/v35.png"

import { Link } from 'react-router-dom'

const OmgDeal = () => {
  return (
    <>
        {/* Part 1 One Banner Two rows Ads with 10 Img */}

        <div style={{width:"100%"}}>
            <Link to="/product" style={{width:"100%"}}>
                <img src={omgDeal} className='img-fluid.' style={{width:"100%",padding:"0px", margin:"0px"}} alt={omgDeal}/>
            </Link>
        </div>

        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s1} className="card-img-top" alt={s1}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s2} className="card-img-top" alt={s2}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s3} className="card-img-top" alt={s3}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s4} className="card-img-top" alt={s4}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s5} className="card-img-top" alt={s5}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s6} className="card-img-top" alt={s6}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s7} className="card-img-top" alt={s7}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s8} className="card-img-top" alt={s8}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s9} className="card-img-top" alt={s9}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s10} className="card-img-top" alt={s10}/>
                </Link>
            </div>
        </div>
        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>    
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product" style={{width:"100%"}}>
                <img src={s11} className="card-img-top" alt={s11}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s12} className="card-img-top" alt={s12}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s13} className="card-img-top" alt={s13}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s14} className="card-img-top" alt={s14}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s15} className="card-img-top" alt={s15}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s16} className="card-img-top" alt={s16}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s17} className="card-img-top" alt={s17}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s18} className="card-img-top" alt={s18}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s19} className="card-img-top" alt={s19}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={s20} className="card-img-top" alt={s20}/>
                </Link>
            </div>
        </div>

        {/* Part 2 One Banner Long and One row with 10 Ads */}

        <div style={{width:"100%"}}>
            <Link to="/product" style={{width:"100%"}}>
                <img src={l1} className='img-fluid.' style={{width:"100%",padding:"0px", margin:"0px"}} alt={l1}/>
            </Link>
        </div>

        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m1} className="card-img-top" alt={m1}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m2} className="card-img-top" alt={m2}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m3} className="card-img-top" alt={m3}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m4} className="card-img-top" alt={m4}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m5} className="card-img-top" alt={m5}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m6} className="card-img-top" alt={m6}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m7} className="card-img-top" alt={m7}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m8} className="card-img-top" alt={m8}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m9} className="card-img-top" alt={m9}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={m10} className="card-img-top" alt={m10}/>
                </Link>
            </div>
        </div>

        
        {/*Part 3 One Banner Long and Two row with 10 Ads */}

        <div style={{width:"100%"}}>
            <Link to="/product" style={{width:"100%"}}>
                <img src={k1} className='img-fluid.' style={{width:"100%",padding:"0px", margin:"0px"}} alt={k1}/>
            </Link>
        </div>

        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x1} className="card-img-top" alt={x1}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x2} className="card-img-top" alt={x2}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x3} className="card-img-top" alt={x3}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x4} className="card-img-top" alt={x4}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x5} className="card-img-top" alt={x5}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x6} className="card-img-top" alt={x6}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x7} className="card-img-top" alt={x7}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x8} className="card-img-top" alt={x8}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x9} className="card-img-top" alt={x9}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x10} className="card-img-top" alt={x10}/>
                </Link>
            </div>
        </div>
        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product" style={{width:"100%"}}>
                <img src={x11} className="card-img-top" alt={x11}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x12} className="card-img-top" alt={x12}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x13} className="card-img-top" alt={x13}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x14} className="card-img-top" alt={x14}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x15} className="card-img-top" alt={x15}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x16} className="card-img-top" alt={x16}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x17} className="card-img-top" alt={x17}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x18} className="card-img-top" alt={x18}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x19} className="card-img-top" alt={x19}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={x20} className="card-img-top" alt={x20}/>
                </Link>
            </div>
        </div>

        {/* Part 4 One Banner Long and One row with 10 Ads */}

        <div style={{width:"100%"}}>
            <Link to="/product" style={{width:"100%"}}>
                <img src={h1} className='img-fluid.' style={{width:"100%",padding:"0px", margin:"0px"}} alt={h1}/>
            </Link>
        </div>

        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g1} className="card-img-top" alt={g1}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g2} className="card-img-top" alt={g2}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g3} className="card-img-top" alt={g3}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g4} className="card-img-top" alt={g4}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g5} className="card-img-top" alt={g5}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g6} className="card-img-top" alt={g6}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g7} className="card-img-top" alt={g7}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g8} className="card-img-top" alt={g8}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g9} className="card-img-top" alt={g9}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={g10} className="card-img-top" alt={g10}/>
                </Link>
            </div>
        </div>

        {/* Part 5 One Banner Long and Six row with 6 Ads */}

        <div style={{width:"100%"}}>
            <Link to="/product" style={{width:"100%"}}>
                <img src={y1} className='img-fluid.' style={{width:"100%",padding:"0px", margin:"0px"}} alt={y1}/>
            </Link>
        </div>

        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v1} className="card-img-top" alt={v1}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v2} className="card-img-top" alt={v2}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v3} className="card-img-top" alt={v3}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v4} className="card-img-top" alt={v4}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v5} className="card-img-top" alt={v5}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v6} className="card-img-top" alt={v6}/>
                </Link>
            </div>
        </div>
        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v7} className="card-img-top" alt={v7}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v8} className="card-img-top" alt={v8}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v9} className="card-img-top" alt={v9}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v10} className="card-img-top" alt={v10}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v11} className="card-img-top" alt={v11}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v12} className="card-img-top" alt={v12}/>
                </Link>
            </div>
        </div>
        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v13} className="card-img-top" alt={v13}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v14} className="card-img-top" alt={v14}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v15} className="card-img-top" alt={v15}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v16} className="card-img-top" alt={v16}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v17} className="card-img-top" alt={v17}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v18} className="card-img-top" alt={v18}/>
                </Link>
            </div>
        </div>
        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v19} className="card-img-top" alt={v19}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v20} className="card-img-top" alt={v20}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v21} className="card-img-top" alt={v21}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v22} className="card-img-top" alt={v22}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v23} className="card-img-top" alt={v23}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v24} className="card-img-top" alt={v24}/>
                </Link>
            </div>
        </div>
        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v25} className="card-img-top" alt={v25}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v26} className="card-img-top" alt={v26}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v27} className="card-img-top" alt={v27}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v28} className="card-img-top" alt={v28}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v29} className="card-img-top" alt={v29}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v30} className="card-img-top" alt={v30}/>
                </Link>
            </div>
        </div>
        <div className="row" style={{width:"100%",padding:"0px", margin:"0px"}}>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v35} className="card-img-top" alt={v35}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v31} className="card-img-top" alt={v31}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v32} className="card-img-top" alt={v32}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v33} className="card-img-top" alt={v33}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v34} className="card-img-top" alt={v34}/>
                </Link>
            </div>
            <div className="col" style={{width:"100%",padding:"0px", margin:"0px"}}>
                <Link to="/product">
                <img src={v35} className="card-img-top" alt={v35}/>
                </Link>
            </div>
        </div>
    </>
  )
}

export default OmgDeal