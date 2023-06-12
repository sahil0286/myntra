import React from 'react'
import "./Product.css"

const Product = (prop) => {
  return (
    <>
        <img src={prop.image} className="card-img-top" alt={prop.image}/>
        <p className=" productName mt-2">{prop.name}</p>
        <p className="productDetail mt-2">{prop.subcategory} from {prop.brand} brand in {prop.color} Color</p>
        <p className="card-text mt-2 mainPrice">Rs. {prop.price-prop.price*(prop.discount)/100} <span className='discountedPrice'>Rs. {prop.price}</span><span className='discountRate' > ( {prop.discount}% OFF )</span></p>
    </>
  )
}

export default Product