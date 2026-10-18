import axios from 'axios'
import {useState} from 'react'
import { formatMoney } from '../utils/money'
export function CartItemsDetails({ cartItem, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity ]=useState(false)
  const [quantity, setQuantity] = useState(cartItem.quantity)
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }
  const updateCartItem = async()=>{ 
  if(isUpdatingQuantity){
    await axios.put(`/api/cart-items/${cartItem.productId}`,{
      quantity:Number(quantity),
    })
    await loadCart()
    setIsUpdatingQuantity(false)
  }
  else{
    setIsUpdatingQuantity(true)
  }
}
const updated = (event) => {
  if(event.key === 'Enter'){
    updateCartItem()
  }
}
const updateQuantityInput = (event) => {
  setQuantity(event.target.value)
}
  return (
    <>
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
            Quantity: {isUpdatingQuantity
              ? <input type="text" className="iput"
              value={quantity} onChange={updateQuantityInput}
              onKeyDown={updated}/>
              : <span className="quantity-label">{cartItem.quantity}</span>
            }
          </span>
          <span className="update-quantity-link link-primary"
            onClick={updateCartItem} >
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  )
}