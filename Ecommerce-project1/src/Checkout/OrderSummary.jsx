import dayjs from 'dayjs'
import axios from 'axios'
import { formatMoney } from "../utils/money"
import {DeliveryOptions} from "./DeliveryOptions"
export function OrderSummary({cart, deliveryOptions, loadCart}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        const selectedDeliveryOptions = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          })

          const deleteCartItem = async ()=> {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart()
          }
          const updateCartItem = async(newQuantity)=>{
            await axios.put(`/api/cart-items/${cartItem.productId}`,{
              quantity: newQuantity
            })
            await loadCart()
          }
        return (
          <div key={cartItem.productid} className="cart-item-container">
            <div className="delivery-date">
              Delivery date:  {dayjs(selectedDeliveryOptions.
                estimatedDeliveryTimeMs).format('dddd, MMMM D')
              }
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image"
                src={cartItem.product.image} />

              <div className="cart-item-details">
                <div className="product-name">
                  {cartItem.product.name}
                </div>
                <div className="product-price">
                  {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  <span>
                    Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary"
                  onClick={() => updateCartItem(cartItem.quantity + 1)}>
                    Update
                  </span>
                  <span className="delete-quantity-link link-primary"
                   onClick={deleteCartItem}>
                    Delete
                  </span>
                </div>
              </div>

              <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}