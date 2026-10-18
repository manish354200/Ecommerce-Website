import { useState } from 'react';
import CartIcon from '../assets/images/icons/cart-icon.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import LogoWhite from '../assets/logo-white.png'
import MobileLogoWhite from '../assets/mobile-logo-white.png'
import { NavLink, useNavigate, useSearchParams } from 'react-router';
import './Header.css';

export function Header( {cart} ){
  const Navigate = useNavigate();
  
  const [searchParams] = useSearchParams();
  
  const searchText = searchParams.get('search')
  const [search, setSearch] = useState(searchText || '');
  const updateSearchInput =(event) =>{
    setSearch(event.target.value)
  }
  const searchProducts = () =>{
    Navigate(`/?search=${search}`)
  }

   let totalQuantity =0;
  cart.forEach((cartItem) => {
    totalQuantity+= cartItem.quantity;
  })
  return (
     <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo"
              src={LogoWhite} />
            <img className="mobile-logo"
              src={MobileLogoWhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input 
          value={search} 
          onChange={updateSearchInput} 
          className="search-bar"
           type="text" placeholder="Search" />

          <button className="search-button"
          onClick={searchProducts}>
            <img className="search-icon" src={SearchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">

            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={CartIcon} />
            <div className="cart-quantity">{totalQuantity}</div>
             <div className="cart-text">Cart</div>
            </NavLink>
        </div>
      </div>
  )
}