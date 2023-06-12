import { React ,useState ,useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import emptyWihslist from "../media/wishlist.png"
import "./Cart.css"
import "./Wishlist.css"
import "./Product.css"
import Product from './Product'

const Wishlist = () => {

    const [wishlistItems, setWishlistItems] = useState([]);

    useEffect(() => {
      // Retrieve cart items from local storage
      const storedWishlistItems = JSON.parse(localStorage.getItem('wishItems')) || [];
      setWishlistItems(storedWishlistItems);
    }, []);
    

    const handleAddToCart = (product) => {
        // Retrieve existing cart items from local storage
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
        // Add the new product to the cart
        const isProductInCart = existingCartItems.some(item => item.id === product.id);
        const updatedCartItems = isProductInCart ? existingCartItems : [...existingCartItems, product];
        
    
        // Store the updated cart items in local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    
        // Optionally, you can display a success message or update the UI to reflect the cart update
        handleRemoveItem(product.id)
      };
      
      const handleRemoveItem = (itemId) => {
        const updatedCartItems = wishlistItems.filter((item) => item.id !== itemId);
        setWishlistItems(updatedCartItems);
        // Update local storage with updated wishlist items
        localStorage.setItem('wishItems', JSON.stringify(updatedCartItems));
      };

  return (
    <>
        <Header/>
        <div>
        {wishlistItems.length === 0 ? (
        <div>
          <div className='d-flex justify-content-center '> 
            <img className='emptyBagLogo' src={emptyWihslist} alt={emptyWihslist} />
          </div>
            <p className='text-center emptyBagBoldHeading'>YOUR WISHLIST IS EMPTY</p>
            <p className='text-center mt-4 emptyBagSmallHeading'>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
        </div>
      ) : 
      (
        <div className="container mt-3">
            <div>
            <p className='wishlistCount mx-4'>My Wishlist <span className='wishlistCountNumber'>{wishlistItems.length} item</span></p>
            </div>
            <div className="row productCard">
            {wishlistItems.map((product) => (
              <div className="col-6 col-lg-3 mt-3" key={product.id}>
                <Product image={product.image} subcategory={product.subcategory} brand={product.brand} color={product.color} name={product.name} price={product.price} discount={product.discount} />
                <div className='d-flex justify-content-between px-1'>
                  <button className='removebtn mb-2 moveToCart' onClick={() => handleAddToCart(product)}>Move to Cart</button>
                  <button className='removebtn mb-2 removBtnWishlist' onClick={() => handleRemoveItem(product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
        </div>
        <Footer/>
    </>
  )
}

export default Wishlist