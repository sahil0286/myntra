import React, { useState } from 'react';
import './ProductPage.css';
import data from '../product.json';
import Product from './Product';
import Header from "./Header"
import Footer from "./Footer"

const ProductPage = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  const handleResetFilters = () => {
    setCategory('');
    setSubcategory('');
    setBrand('');
    setColor('');
    setPrice('');
    setDiscount('');
  };

  const filterProducts = () => {
    return data.filter((product) => {
      const categoryMatch = category === '' || product.category === category;
      const subcategoryMatch = subcategory === '' || product.subcategory === subcategory;
      const brandMatch = brand === '' || product.brand === brand;
      const colorMatch = color === '' || product.color === color;
      const priceMatch = price === '' || parseInt(product.price-product.price*(product.discount/100)) <= parseInt(price-price*(discount/100));
      const discountMatch = discount === '' || parseInt(product.discount) >= parseInt(discount);

      return categoryMatch && subcategoryMatch && brandMatch && colorMatch && priceMatch && discountMatch;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <>
    <Header/>
      <div className="row main">
        <div className="col-2 left">
          <div className="filter-options">
            <div className="filter-option">
              <span className='filterHeader'>CATEGORY</span>
                <li style={{listStyleType: "none"}}>
                    <label>
                        <input type="radio" name="category" value="" checked={category === ''} onChange={handleCategoryChange} />All Categories
                    </label>
                </li>
                <li style={{listStyleType: "none"}}>
                    <label>
                        <input type="radio" name="category" value="men" checked={category === 'men'} onChange={handleCategoryChange} />Men
                </label>
                </li>
                <li style={{listStyleType: "none"}}>
                    <label>
                        <input type="radio" name="category" value="women" checked={category === 'women'} onChange={handleCategoryChange} />Women
                    </label>
                </li>
            </div>
            <div className="filter-option">
              <span className='filterHeader'>SUBCATEGORY</span>
              {category === 'men' && (
                <>
                  <label>
                    <input type="radio" name="subcategory" value="" checked={subcategory === ''} onChange={handleSubcategoryChange} />
                    All Subcategories
                  </label>
                  <label>
                    <input type="radio" name="subcategory" value="tshirts" checked={subcategory === 'tshirts'} onChange={handleSubcategoryChange} />
                    T-Shirts
                  </label>
                  <label>
                    <input type="radio" name="subcategory" value="long tshirts" checked={subcategory === 'long tshirts'} onChange={handleSubcategoryChange} />
                    Long T-Shirts
                  </label>
                </>
              )}
              {category === 'women' && (
                <>
                  <label>
                    <input type="radio" name="subcategory" value="" checked={subcategory === ''} onChange={handleSubcategoryChange} />
                    All Subcategories
                  </label>
                  <label>
                    <input type="radio" name="subcategory" value="kurta set" checked={subcategory === 'kurta set'} onChange={handleSubcategoryChange} />
                    Kurta Set
                  </label>
                  <label>
                    <input type="radio" name="subcategory" value="kurta" checked={subcategory === 'kurta'} onChange={handleSubcategoryChange} />
                    Kurta
                  </label>
                </>
              )}
            </div>
            <div className="filter-option">
              <span className='filterHeader'>BRAND</span>
              {category !== '' && (
                <>
                  <label>
                    <input type="radio" name="brand" value="" checked={brand === ''} onChange={handleBrandChange} />
                    All Brands
                  </label>
                  {category === 'men' && (
                    <>
                      <label>
                        <input type="radio" name="brand" value="Rx" checked={brand === 'Rx'} onChange={handleBrandChange} />
                        Rx
                      </label>
                      <label>
                        <input type="radio" name="brand" value="Ry" checked={brand === 'Ry'} onChange={handleBrandChange} />
                        Ry
                      </label>
                    </>
                  )}
                  {category === 'women' && (
                    <>
                      <label>
                        <input type="radio" name="brand" value="Wx" checked={brand === 'Wx'} onChange={handleBrandChange} />
                        Wx
                      </label>
                      <label>
                        <input type="radio" name="brand" value="Wy" checked={brand === 'Wy'} onChange={handleBrandChange} />
                        Wy
                      </label>
                    </>
                  )}
                </>
              )}
            </div>
            <div className="filter-option">
              <span className='filterHeader'>COLOR</span>
              {category === 'men' && (
                <>
                  <label>
                    <input type="radio" name="color" value="" checked={color === ''} onChange={handleColorChange} />
                    All Colors
                  </label>
                  <label>
                    <input type="radio" name="color" value="red" checked={color === 'red'} onChange={handleColorChange} />
                    Red
                  </label>
                  <label>
                    <input type="radio" name="color" value="green" checked={color === 'green'} onChange={handleColorChange} />
                    Green
                  </label>
                  <label>
                    <input type="radio" name="color" value="black" checked={color === 'black'} onChange={handleColorChange} />
                    Black
                  </label>
                </>
              )}
              {category === 'women' && (
                <>
                  <label>
                    <input type="radio" name="color" value="" checked={color === ''} onChange={handleColorChange} />
                    All Colors
                  </label>
                  <label>
                    <input type="radio" name="color" value="gold" checked={color === 'gold'} onChange={handleColorChange} />
                    Gold
                  </label>
                  <label>
                    <input type="radio" name="color" value="yellow" checked={color === 'yellow'} onChange={handleColorChange} />
                    Yellow
                  </label>
                  <label>
                    <input type="radio" name="color" value="green" checked={color === 'green'} onChange={handleColorChange} />
                    Green
                  </label>
                  <label>
                    <input type="radio" name="color" value="pink" checked={color === 'pink'} onChange={handleColorChange} />
                    Pink
                  </label>
                </>
              )}
            </div>
            <div className="filter-option">
              <span className='filterHeader'>MAX PRICE</span>
              <input type="text" placeholder="Max Price" value={price} onChange={handlePriceChange} />
            </div>
            <div className="filter-option">
              <span className='filterHeader'>DISCOUNT</span>
              <select value={discount} onChange={handleDiscountChange}>
                <option value="">All Discounts</option>
                <option value="10">10% off</option>
                <option value="20">20% off</option>
                <option value="30">30% off</option>
                <option value="40">40% off</option>
                <option value="50">50% off</option>
                <option value="60">60% off</option>
                <option value="70">70% off</option>
                <option value="80">80% off</option>
              </select>
            </div>
            <button  onClick={handleResetFilters} style={{borderRadius:"20px"}}>Reset Filters</button>
          </div>
        </div>
        <div className="col-10 right">
          <div className="row row-cols-4">
            {filteredProducts.map((product) => (
              <div className="col" key={product.id}>
                <Product image={product.image} subcategory={product.subcategory} brand={product.brand} name={product.name} price={product.price} discount={product.discount} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductPage;
