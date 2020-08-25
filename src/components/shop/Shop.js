import React, { useState } from 'react';
import fakeData from '../../fakeData';
import shop from './Shop.css';
import Products from'../Products/Products.js';

const Shop = () => {
    const first10=fakeData.slice(0,10);
    const[products,setProducts]=useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
            
{
products.map(product=><Products>{product.name}</Products>)
}
            
            </div>
            <div className="cart-container">
                <h1>cart is writting here</h1>
            </div>
        </div>
    );
};

export default Shop;