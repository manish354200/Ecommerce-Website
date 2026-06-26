import { Link } from 'react-router';
import { Header } from '../components/Header';
import LogoWhite from '../assets/logo-white.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import CartIcon from '../assets/images/icons/cart-icon.png'
import './TrackingPage.css'
export function TrackingPage(){
  return ( 
  <>
     <title>Tracking</title>
     <link rel="icon" type="image/svg+xml" href="/images/tracking-favicon.png" />
     <Header />
     <div class="header">
      <div class="left-section">
        <Link href="tracking" class="header-link">
          <img class="logo"
            src={LogoWhite} />
          {/* <img
            src={MobileLogo} /> */}
        </Link>
      </div>

      <div class="middle-section">
        <input class="search-bar" type="text" placeholder="Search" />

        <button class="search-button">
          <img class="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div class="right-section">
        <Link class="orders-link header-link" href="/orders">

          <span class="orders-text">Orders</span>
        </Link>

        <Link class="cart-link header-link" href="/checkout">
          <img class="cart-icon" src={CartIcon} />
          <div class="cart-quantity">3</div>
          <div class="cart-text">Cart</div>
        </Link>
      </div>
    </div>

    <div class="tracking-page">
      <div class="order-tracking">
        <Link class="back-to-orders-link link-primary" href="/orders">
          View all orders
        </Link>

        <div class="delivery-date">
          Arriving on Monday, June 13
        </div>

        <div class="product-info">
          Black and Gray Athletic Cotton Socks - 6 Pairs
        </div>

        <div class="product-info">
          Quantity: 1
        </div>

        <img class="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg" />

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>
    </div>
  </>
  )
}