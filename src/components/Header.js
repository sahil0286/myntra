import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import './Header.css';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { CiLogout } from 'react-icons/ci';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Header = ({ onValueChange }) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [cartItemCount, setCartItemCount] = useState(0);

  const [searchQuery, setSearchQuery] = useState(""); 
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchQuery(value); // Update child component's state with the new value
      onValueChange(value); // Call the parent component's callback function with the value
    };

  useEffect(() => {
    // Get the cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    // Calculate the total count of items in the cart
    const count = cartItems ? cartItems.length : 0;
    setCartItemCount(count);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg headerShadow sticky-top" style={{ backgroundColor: 'white' }}>
        <div className="container-fluid headerContainer" style={{ paddingLeft: '0px' }}>
          <Link className="navbar-brand d-flex align-items-center mb-2 mb-lg-0 text-decoration-none headerLogo" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginBottom: '12px', marginTop: '12px' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/product" className="nav-link headerNameStyle">
                  MEN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link headerNameStyle">
                  WOMEN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link headerNameStyle">
                  KIDS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link headerNameStyle">
                  HOME & LIVING
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link headerNameStyle">
                  BEAUTY
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link headerNameStyle">
                  STUDIO <sup className="textSupNew">NEW</sup>
                </Link>
              </li>
            </ul>
            <form className="d-flex align-items-center navbar-nav mb-2 mb-lg-0" role="search">
              <input
                className="form-control me-2 searchBar"
                type="search"
                placeholder="🔍        Search for products, brands and more"
                aria-label="Search"
                value={searchQuery} onChange={handleInputChange}
              />
              <ul className="nav col-lg-auto my-2 justify-content-center my-md-0 text-small mb-lg-0" style={{ backgroundColor: 'white' }}>
                <li>
                  {isAuthenticated && (
                    <li>
                      <button onClick={() => loginWithRedirect()} className="nav-link text-secondary mx-2 mt-2">
                        <FaRegUser className="bi d-block mx-auto" style={{ fontSize: '18px' }} />
                        <span className="headerIcon" style={{ fontSize: '12px' }}>
                          {user.name}
                        </span>
                      </button>
                    </li>
                  )}
                </li>
                {isAuthenticated ? (
                  <li>
                    <button
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="nav-link text-secondary mx-2 mt-2"
                    >
                      <CiLogout className="bi d-block mx-auto" style={{ fontSize: '18px' }} />
                      <span className="headerIcon" style={{ fontSize: '12px' }}>
                        Log Out
                      </span>
                    </button>
                  </li>
                ) : (
                  <li>
                    <button onClick={() => loginWithRedirect()} className="nav-link text-secondary mx-2 mt-2">
                      <FaRegUser className="bi d-block mx-auto" style={{ fontSize: '18px' }} />
                      <span className="headerIcon" style={{ fontSize: '12px' }}>
                        Profile
                      </span>
                    </button>
                  </li>
                )}
                <li>
                  <Link to="/wishlist" className="nav-link text-secondary mx-2 mt-2">
                    <AiOutlineHeart className="bi d-block mx-auto" style={{ fontSize: '20px' }} />
                    <span className="headerIcon">Wishlist</span>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="nav-link text-secondary mx-2 mt-2">
                    <HiOutlineShoppingBag className="bi d-block mx-auto" style={{ fontSize: '21px' }} />
                    {cartItemCount === 0 && <span className="headerIcon">Bag</span>}
                    
                    {cartItemCount > 0 && <span className="cartItemCount" style={{padding:"35%"}}>{cartItemCount}</span>}
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
