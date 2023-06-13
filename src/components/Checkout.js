import React from 'react'
import thankYouForOrder from "../media/thankYouForOrder.png"
import "./Cart.css"
import "./Checkout.css"

const Checkout = () => {
  return (
    <>
      <div>
          <div className='d-flex justify-content-center '> 
            <img className='emptyBagLogo thankYouLogo' src={thankYouForOrder} alt={thankYouForOrder} />
          </div>
            <p className='text-center emptyBagBoldHeading'>Thank You for Your Order!</p>
            <p className='text-center mt-4 emptyBagSmallHeading'>Your order has been successfully placed. We appreciate your business!</p>
      </div>
    </>
  )
}

export default Checkout