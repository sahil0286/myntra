import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import "./Product.css"
import "./Cart.css"
import emptyBag from "../media/empty-bag.png"

import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  
  const { isAuthenticated} = useAuth0();
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleOrderPlace = () => {
    setCartItems("");
    // Update local storage with updated cart items
    localStorage.setItem('cartItems', JSON.stringify(""));
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    // Update local storage with updated cart items
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: parseInt(item.quantity) + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Update local storage with updated cart items
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
  

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: parseInt(item.quantity) - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Update local storage with updated cart items
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const discountedPrice = item.price - (item.price * item.discount) / 100;
      const itemTotal = discountedPrice * item.quantity;
      total += itemTotal;
    });
    return total;
  };
  

  return (
    <>
    <Header/>
    <div className='mt-3 cartDiv'>
      {cartItems.length === 0 ? (
        <div>
          <div className='d-flex justify-content-center '> 
            <img className='emptyBagLogo' src={emptyBag} alt={emptyBag} />
          </div>
            <p className='text-center emptyBagBoldHeading'>Hey, it feels so light!</p>
            <p className='text-center emptyBagSmallHeading'>There is nothing in your bag. Let's add some items.</p>
        </div>
      ) : (
        <div className='container'>
          {cartItems.map((item) => (
        <div className="row mt-3">
            <div className="col-2" key={item.id}>
              <img src={item.image} alt={item.image} style={{width:"100%"}}/>
            </div>
            <div className="col-10">
              <p className='productName'>{item.name}</p>
              <p className="productDetail mt-2">{item.subcategory} from {item.brand} brand in {item.color} Color</p>
              <p className="card-text mt-2 mainPrice">Rs. {item.price-item.price*(item.discount)/100} <span className='discountedPrice'>Rs. {item.price}</span><span className='discountRate' > ( {item.discount}% OFF )</span></p>
              <p className='quentityCart'>Quantity: {item.quantity}</p>
              <button className='removebtn mb-2 quentityCart' onClick={() => handleRemoveItem(item.id)}>Remove</button>
              <button className="incBtn quentityCart" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              <button className="decBtn quentityCart" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <p>Total: <span className='quentityIntoPrice quentityCart'>Rs. {(item.price-item.price*(item.discount/100))* item.quantity}</span></p>
            </div>
          </div>
          ))}
          <hr />
          <p className='text-end totalAmount'>Total Amount: <span className='totalAmountRs' >Rs.{calculateTotalPrice()}</span></p>
          {isAuthenticated ? 
          (
            <Link className='checkOutBtn' to="/checkout"><button className='removebtn mb-2 quentityCart cobtn ' onClick={() => handleOrderPlace()}>Place Order</button></Link>
          )
          :
          (
            <Link className='logInBeforeCheckOutBtn'><button disabled className='removebtn mb-2 quentityCart logBeforebtn '>Log In before Placing Order</button></Link>
          )}
          
        </div>
      )}
      <Footer/>
      </div>
    </>
  );
};

export default Cart;
