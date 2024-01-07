import React from 'react';
import '../signin/Signin.css';
function Signin() {
  return (
        <div class="container">
            <div class="inner_content">
                <div class="amazon_logo">
                    <img src="http://localhost:8000/images/amazon_logo.png" alt=""></img>
                </div>
                {/* form content */}
                <form action="" method="POST">
                    <div class="inner_form">
                        <div class="form_heading"> 
                            <h1>Sign in</h1>
                        </div>
                        {/* Email input */}
                        <div class="form_input">
                            <h5 id="h5" >EmailMessege</h5>
                            <input  type="text" id="user_name" name="email" placeholder=""></input>
                        </div>

                        {/* Email input */}
                        <div class="form_input">
                            <h5 id="h5">Password</h5>
                            <input  type="text" id="user_name" name="password" placeholder=""></input>
                        </div>

                        {/* Sumbit button */}
                        <div class="form_sumbit_btn">
                            <button id="login_btn">continue</button>
                        </div>

                        {/* policy */}
                        <div class="form_policy">
                            <p>
                                By continuing, you agree to Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Policy.</a>
                            </p>
                        </div>

                        {/* help & forgot */}
                        <div class="form_help_forgot">
                            <div class="forgot_link">
                                <a href="">Forgot Password</a>
                            </div>
                            <div class="issues_link">
                                <a href="">Other issues with Sign-in</a>
                            </div>
                        </div>
                    </div>
                </form>

                {/* new to amazon */}
                <div class="new_create">
                    <h4 class="new_to">New to Amazon?</h4>

                    {/* create account button */}
                    <div class="new_create_btn" >
                        <a href="">
                            <button>Create your Amazon account</button>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        /* footer content */
    )
}

export default Signin