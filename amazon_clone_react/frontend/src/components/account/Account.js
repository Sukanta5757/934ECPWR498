import React from 'react'
import '../account/Account.css'

function Account() {
  return (
    <div class='Account'>
      <div class='Account_inner'>
        <h1>Your Account</h1>
        <div class='Account_items'>
        {/* your order */}
          <ul class='your_order'>
            <div class='your_order_left left'>
              <img src='./images/accountImg/account-Your_order.png' />
            </div>

            <div class='your_order_right right'>
              <h3>Your orders</h3>
              <p>Track, return, or buy things again</p>
            </div>
          </ul>
          {/* Login security */}
          <ul class='Login_security'>
            <div class='Login_security_left left'>
              <img src='./images/accountImg/account-sign-in-lock.png' />
            </div>

            <div class='Login_security_right right'>
              <h3>Login security</h3>
              <p>Edit login, name, and mobile number</p>
            </div>
          </ul>
          {/* Prime */}
          <ul class='Prime'>
            <div class='Prime_left left'>
              <img src='./images/accountImg/account-prime.png' />
            </div>

            <div class='Prime_right right'>
              <h3>Prime</h3>
              <p>View benefits and payment settings</p>
            </div>
          </ul>
          {/* Your Addresses */}
          <ul class='Your_Addresses'>
            <div class='Your_Addresses_left left'>
              <img src='./images/accountImg/account-address-map-pin.png' />
            </div>

            <div class='Your_Addresses_right right'>
              <h3>Your Addresses</h3>
              <p>Edit addresses for orders and gifts</p>
            </div>
          </ul>
          {/* Payment options */}
          <ul class='Payment_options'>
            <div class='Payment_options_left left'>
              <img src='./images/accountImg/account-Payments.png' />
            </div>

            <div class='Payment_options_right right'>
              <h3>Payment options</h3>
              <p>Edit or add payment methods</p>
            </div>
          </ul>
          {/* Amazon pay */}
          <ul class='Amazon_pay'>
            <div class='Amazon_pay_left left'>
              <img src='./images/accountImg/account-amazon_pay.png' />
            </div>

            <div class='Amazon_pay_right right'>
              <h3>Amazon pay balance</h3>
              <p>Add money to your balance</p>
            </div>
          </ul>
          {/* Contant Us */}
          <ul class='Contant_Us'>
            <div class='Contant_Us_left left'>
              <img src='./images/accountImg/account-contact_us.png' />
            </div>
            <div class='Contant_Us_right right'>
              <h3>Contact Us</h3>
            </div>
          </ul>
          {/* Your business */}
          <ul class='Your_business'>
            <div class='Your_business_left left'>
              <img src='./images/accountImg/account-amazon_business.jpg' />
            </div>

            <div class='Your_business_right right'>
              <h3>Your business account</h3>
              <p>Sign up to save up to 28% with GST invoice and bulk discounts, purchase on credit, and more</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Account