import React from 'react'
import '../account/Account.css'

function Account() {
  return (
    <div class='Account'>
      <h1>Your Account</h1>
      <div class='Account_items'>
      {/* your order */}
        <div class='your_order'>
          <div class='your_order_left'>
            <img src='./images/accountImg/account-address-map-pin.png' />
          </div>

          <div class='your_order_right'>
            <h3>Your orders</h3>
            <p>Track, return, or buy things again</p>
          </div>
        </div>
        {/* Login security */}
        <div class='Login_security your_order'>
          <div class='Login_security_left'>
            <img src='./images/accountImg/account-sign-in-lock.png' />
          </div>

          <div class='Login_security_right'>
            <h3>Login security</h3>
            <p>Edit login, name, and mobile number</p>
          </div>
        </div>
        {/* Prime */}
        <div class='Prime your_order'>
          <div class='Prime_left'>
            <img src='./images/accountImg/account-prime.png' />
          </div>

          <div class='Prime_right'>
            <h3>Prime</h3>
            <p>View benefits and payment settings</p>
          </div>
        </div>
        {/* Your Addresses */}
        <div class='Your_Addresses your_order'>
          <div class='Your_Addresses_left'>
            <img src='./images/accountImg/account-address-map-pin.png' />
          </div>

          <div class='Your_Addresses_right'>
            <h3>Your Addresses</h3>
            <p>Edit addresses for orders and gifts</p>
          </div>
        </div>
        {/* Payment options */}
        <div class='Payment_options your_order'>
          <div class='Payment_options_left'>
            <img src='./images/accountImg/account-Payments.png' />
          </div>

          <div class='Payment_options_right'>
            <h3>Payment options</h3>
            <p>Edit or add payment methods</p>
          </div>
        </div>
        {/* Amazon pay */}
        <div class='Amazon_pay your_order'>
          <div class='Amazon_pay_left'>
            <img src='./images/accountImg/account-amazon_pay.png' />
          </div>

          <div class='Amazon_pay_right'>
            <h3>Amazon pay balance</h3>
            <p>Add money to your balance</p>
          </div>
        </div>
        {/* Contant Us */}
        <div class='Contant_Us your_order'>
          <div class='Contant_Us_left your_order_left'>
            <img src='./images/accountImg/account-contact_us.png' />
          </div>
          <div class='Contant_Us_right'>
            <h3>Contact Us</h3>
          </div>
        </div>
        {/* Your business */}
        <div class='Your_business your_order'>
          <div class='Your_business_left your_order_left'>
            <img src='./images/accountImg/account-amazon_business.jpg' />
          </div>

          <div class='Your_business_right'>
            <h3>Your business account</h3>
            <p>Sign up to save up to 28% with GST invoice and bulk discounts, purchase on credit, and more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account