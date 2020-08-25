import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div class="header">
           <img src={logo} alt=""/>
           <nav>
               <a href="#shop">Shop</a>
               <a href="#order-review">Order-Review</a>
               <a href="#manage-inventary">Manage-Inventary</a>
           </nav>
        </div>
    );
};

export default Header;