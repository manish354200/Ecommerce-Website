import axios from 'axios'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Home/HomePage'
import { CheckoutPage } from './Checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFoundPage } from './pages/NotFound'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [cart,setCart] = useState([]);
  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data); 
    }
  useEffect(()=>{
    loadCart();
  },[]);
  return (
    <Routes>
      <Route path="/" element ={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={ <CheckoutPage cart={cart} /> } />
      <Route path="orders" element={<OrdersPage cart={cart}/>}/>
      <Route path="tracking/:orderId/:productId" element={<TrackingPage />}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    
  )
}

export default App
