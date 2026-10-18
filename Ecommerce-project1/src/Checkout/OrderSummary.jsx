import dayjs from 'dayjs'
// import axios from 'axios'
// import { formatMoney } from "../utils/money"
import { CartItemsDetails } from './CartItemsDetails'
import {DeliveryOptions} from "./DeliveryOptions"
export function OrderSummary({cart, deliveryOptions, loadCart}) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 && cart.map((cartItem) => {
        const selectedDeliveryOptions = deliveryOptions
          .find((deliveryOption) => {
            return deliveryOption.id === cartItem.deliveryOptionId;
          })
         
        return (
          <div key={cartItem.productid} className="cart-item-container">
            <div className="delivery-date">
              Delivery date:  {dayjs(selectedDeliveryOptions.
                estimatedDeliveryTimeMs).format('dddd, MMMM D')
              }
            </div>

            <div className="cart-item-details-grid">
              <CartItemsDetails  cartItem={cartItem} loadCart={loadCart}/>
              <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}