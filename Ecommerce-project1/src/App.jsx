import axios from 'axios'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './Checkout/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { NotFoundPage } from './pages/NotFound'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [cart,setCart] = useState([]);
  useEffect(()=>{
     axios.get('/api/cart-items')
     .then((response) => {
      setCart(response.data); 
     })
  },[])
  return (
    <Routes>
      <Route path="/" element ={<HomePage cart={cart} />} />
      <Route path="checkout" element={ <CheckoutPage cart={cart} /> } />
      <Route path="orders" element={<OrdersPage cart={cart}/>}/>
      <Route path="tracking" element={<TrackingPage />}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    
  )
}

export default App
