import React from 'react'
import '../orderReturn/OrderReturn.css'

function OrderReturn() {
  return (
    <div className='orderReturn'>
        
        <div className='orderReturn_items'>
            <h1>Your Order</h1>
            <h2 className='orderReturn_title'>
                <span>Orders Buy</span>
                <span>Buy Again</span>
                <span>Not Yet</span>
                <span>Cancelled Orders</span>
            </h2>

            <div className='orderReturn_product'>
                <img src='http://localhost:8000/images/cardmob1.jpg' className='cartProduct_img'></img>
                <div className='orderReturn_info'>
                    <p className='orderReturn_title'>Product Name</p>
                    <p className='orderReturn_price'>
                        <strong>₹10,000</strong>
                    </p>
                    <button>Buy it again</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderReturn