import axios from 'axios'
import { Link, useParams} from 'react-router';
import { useEffect,useState } from 'react';
import dayjs from 'dayjs';
// import MobileLogo from '../assets/mobile-logo-white.png'
import './TrackingPage.css'

export function TrackingPage() {
  const {orderId, productId} = useParams();
  const [trackorder, setTrackOrder] = useState(null);
  useEffect(()=> {
    const fetchTrack = async ()=>{
       const response = await axios.get(`/api/orders/${orderId}?expand=products`)
       setTrackOrder(response.data)
     }
     if(orderId){ 
     fetchTrack() 
    }
  }, [orderId]);

  if(!orderId){
    return null;
  }

  if(!trackorder){
    return <div>Loading....</div>;
  }

  const orderProducts = trackorder.products.find((orderProducts)=>{
    return orderProducts.productId === productId
  })
  if(!orderProducts) {
    return <div>Product not found in this order.</div>
  }
  let totalDeliveryTimeMs = orderProducts.estimatedDeliveryTimeMs - trackorder.orderTimeMs;
  let timePassedMs = dayjs().valueOf()-trackorder.orderTimeMs;
  let percentagePlaced=(timePassedMs/totalDeliveryTimeMs)*100;
  if(percentagePlaced>100){
    percentagePlaced=100;
  }
  if(percentagePlaced<0){
    percentagePlaced=0;
  }
  let isPreparing=false
  let isShipped=false
  let isDelivered=false
  if(percentagePlaced>=0 && percentagePlaced<33){
    isPreparing=true
  }
  if(percentagePlaced>=33 && percentagePlaced<100){
    isShipped=true
  }
  if(percentagePlaced==100){
    isDelivered=true
  }
  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" href="/images/tracking-favicon.png" />
      
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on {dayjs(orderProducts.estimatedDeliveryTimeMs).format('dddd, MMMM D')}

          </div>

          <div className="product-info">
            {orderProducts.product.name}
          </div>

          <div className="product-info">
            Quantity: {orderProducts.quantity}
          </div>

          <img className="product-image" src={orderProducts.product.image}/>

          <div className="progress-labels-container">
            <div className={`progress-label ${isPreparing && 'current-status'}`}>
              Preparing
            </div>
            <div className={`progress-label ${isShipped && 'current-status'}`}>
              Shipped
            </div>
            <div className={`progress-label ${isDelivered && 'current-status'}`}>
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar" style={{width:`${percentagePlaced}%`}}></div>
          </div>
        </div>
      </div>
    </>
  )
}