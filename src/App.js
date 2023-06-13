import React from 'react'
import Header from './components/Header'
import MainAd from './components/MainAd'
import OmgDeal from './components/OmgDeal'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>

<Routes>
          <Route path='/' element=
          {
            <div>
              <Header/>
              <MainAd/>
              <OmgDeal/>
              <Footer/>
            </div>
          }/>
          <Route path='/product' element=
          {
            <div>
              <ProductPage/>
            </div>
          }/>
          <Route path='/wishlist' element=
          {
            <div>
              <Wishlist/>
            </div>
          }/>
          <Route path='/cart' element=
          {
            <div>
              <Cart/>
            </div>
          }/>
          <Route path='/checkout' element=
          {
            <div>
              <Checkout/>
            </div>
          }/>
</Routes>
    </>
  )
}

export default App