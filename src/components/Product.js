import React from 'react'


const Product = (prop) => {
  return (
    <>
        <img src={prop.image} className="card-img-top" alt={prop.image}/>
        <h3 className="card-text">{prop.name}</h3>
        <p className="card-text">{prop.subcategory} from {prop.brand}</p>
        <p className="card-text" style={{fontWeight:"bold", fontSize:"14px"}}>Rs. {prop.price-prop.price*(prop.discount)/100} <span style={{fontWeight:"normal", color:"##7e818c" , fontSize:"12px", textDecoration: "line-through"}}>Rs. {prop.price}</span><span style={{fontWeight:"normal", color:"#FF9B6A" , fontSize:"14px"}}> ( {prop.discount}% OFF )</span></p>
    </>
  )
}

export default Product