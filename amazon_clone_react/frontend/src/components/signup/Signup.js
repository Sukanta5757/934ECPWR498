import React from 'react';
import '../signup/Signup.css';
function Signup() {
  return (
    
    <div class="container">
        <div class="inner_content">
            <div class="amazon_logo">
                <img src="http://localhost:8000/images/amazon_logo.png" alt=""></img>
            </div>
            
            {/* form content */}
            <form action=""  method="POST">
                <div class="inner_form">
                    <div class="form_heading"> 
                        <h1>Create Account</h1>
                    </div>
                    {/* Name input */}
                    <div class="form_input">
                        <h5>Your name</h5>
                        <input type="text" id="user_name" name="name" placeholder="first and last name"></input>
                    </div>

                    {/* Mobile input */}
                    <div class="form_input">
                        <h5>Mobile number</h5>
                        <select>
                            <option>IN +91 </option>
                            <option>IN +1</option>
                        </select>
                        <input type="text" id="user_mobile" name="mobile" placeholder="Mobile number"></input>
                    </div>

                    {/* Email input */}
                    <div class="form_input">
                        <h5>Email optional</h5>
                        <input type="text" id="user_email" name="email" placeholder="Email"></input>
                    </div>

                    {/* Password input */}
                    <div class="form_input">
                        <h5>Password</h5>
                        <input type="text" id="user_password" name="password" placeholder="At least 6 characters"></input>
                        <p><span>i</span> Passwords must be at least 6 characters</p>
                    </div>

                    {/* Message */}
                    <div class="form_message">
                        <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                    </div>

                    {/* Sumbit button */}
                    <div class="form_sumbit_btn">
                        <button>verify mobile number</button>
                    </div>

                    {/* links */}
                    <div class="form_links">
                        <p>Already have an account?<a href="http://127.0.0.1:5500/Amazon_clone/signin.html">Sign in</a></p>
                        <p>Buying for work?<a href="">Create a free business account</a></p>
                    </div>
                    
                    {/* policy */}
                    <div class="form_policy">
                        <p>
                            By creating an account or logging in, you agree to
                        </p>
                        <p>
                            Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Policy.</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>

  )
}

export default Signup