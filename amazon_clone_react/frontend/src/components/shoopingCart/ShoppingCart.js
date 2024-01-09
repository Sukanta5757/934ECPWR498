import React from 'react'
import '../shoopingCart/ShoppingCart.css'
function ShoppingCart() {
  return (
    <div className='shopping_cart'>
      <div className='cart_lift'>
        <div className=''>
          <h3>Hello Maa Binjhagiri</h3>
          <h2 className='cart_title'>Your shopping Basket</h2>
          <div className='cart_product'>
            <img src='http://localhost:8000/images/cardmob1.jpg' className='cartProduct_img'></img>
            <div className='cartProduct_info'>
              <p className='cartProduct_title'>Product Name</p>
              <p className='cartProduct_price'>
                <strong>₹10,000</strong>
              </p>
              <button>Remove</button>
            </div>
          </div>
        </div>
      </div>
      <div className='cart_right'>
        <div className='subtotal'>
          <p>Subtotal (2 items): <storng>₹20,000</storng></p>
          <small className='subtotal_gift'>
            <input type='checkbox' /> This order contains a gift
          </small>
        </div>
        <button>Proceed to Buy</button>
      </div>
    </div>

  )
}

export default ShoppingCart