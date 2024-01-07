import React from "react";
import '../product/Product.css';
import TodayDeal from './todayDeal';

const Product = ()=> {

    return (
        // main section start         
        <main class="main_content">
            {/* card product section start */}
            <div class="card_product_section">
                <div class="card-product-content">
                <div class="card-product">
                        <h2>Deals on smartphones that suits your budget</h2>
                        <div class="product-nested-cards">
                            <a href="/Mobiles" class="nested-card">
                                <img src="http://localhost:8000/images/cardmob1.jpg"></img>
                                <p>Budget | Under ₹10,000</p>
                            </a>
    
                            <a href="/Mobiles" class="nested-card">
                                <img src="http://localhost:8000/images/cardmob2.jpg"></img>
                                <p>Mid range | ₹10,000 - ₹25,000</p>
                            </a>
    
                            <a href="/Mobiles" class="nested-card">
                                <img src="http://localhost:8000/images/cardmob3.jpg"></img>
                                <p>Premium | ₹25,000 - ₹40,000</p>
                            </a>
    
                            <a href="/Mobiles" class="nested-card">
                                <img src="http://localhost:8000/images/cardmob4.jpg"></img>
                                <p>Ultra premium | Above ₹40,000</p>
                            </a>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div> 
                    
                    <div class="card-product">
                        <h2>Up to 75% off | Headphones</h2>
                        <div class="product-nested-cards">
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card1.jpg"></img>
                                <p>boAt Up to 75% off | boAt</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card2.jpg"></img>
                                <p>boAtUp to 75% off | boult</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card3.jpg"></img>
                                <p>boAtUp to 75% off | noise</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card4.jpg"></img>
                                <p>boAtUp to 75% off | zebronics</p>
                            </div>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div>
    
                    <div class="card-product">
                        <h2>Up to 60% off | Styles for men</h2>
                        <div class="product-nested-cards">
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card5.jpg"></img>
                                <p>Clothing</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card6.jpg"></img>
                                <p>Footwear</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card7.jpg"></img>
                                <p>Watches</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card8.jpg"></img>
                                <p>Bags & wallets</p>
                            </div>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div>
    
                    <div class="card-product">
                        <h2>Revamp your home in style</h2>
                        <div class="product-nested-cards">
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card9.jpg"></img>
                                <p>Bedsheets, curtains & more</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card10.jpg"></img>
                                <p>Home decoration</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card11.jpg"></img>
                                <p>Home storage</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card12.jpg"></img>
                                <p>Lighting solutions</p>
                            </div>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div>
                </div>
    
                <div class="card-product-content">
                    <div class="card-product">
                        <h2>Appliances for your home | Up to 55% off</h2>
                        <div class="product-nested-cards">
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card13.jpg"></img>
                                <p>Air conditioners</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card14.jpg"></img>
                                <p>Refrigerators</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card15.jpg"></img>
                                <p>Microweves</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card16.jpg"></img>
                                <p>Washising machines</p>
                            </div>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div>
    
                    <div class="card-product">
                        <h2>Revamp your home in style</h2>
                        <div class="product-nested-cards">
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card9.jpg"></img>
                                <p>Bedsheets, curtains & more</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card10.jpg"></img>
                                <p>Home decoration</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card11.jpg"></img>
                                <p>Home storage</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card12.jpg"></img>
                                <p>Lighting solutions</p>
                            </div>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div>
    
                    <div class="card-product">
                        <h2>Up to 60% off | Styles for men</h2>
                        <div class="product-nested-cards">
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card5.jpg"></img>
                                <p>Clothing</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card6.jpg"></img>
                                <p>Footwear</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card7.jpg"></img>
                                <p>Watches</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card8.jpg"></img>
                                <p>Bags & wallets</p>
                            </div>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div>
    
                    <div class="card-product">
                        <h2>Up to 75% off | Headphones</h2>
                        <div class="product-nested-cards">
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card1.jpg"></img>
                                <p>boAt Up to 75% off | boAt</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card2.jpg"></img>
                                <p>boAtUp to 75% off | boult</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card3.jpg"></img>
                                <p>boAtUp to 75% off | noise</p>
                            </div>
    
                            <div class="nested-card">
                                <img src="http://localhost:8000/images/card4.jpg"></img>
                                <p>boAtUp to 75% off | zebronics</p>
                            </div>
                        </div>
                        <button class="card-product-btn">see more</button>
                    </div>
                </div>
            </div>
            {/* card product section end */}
    
            {/* today's deals section start */}
            <TodayDeal/>
            {/* today's deals section end */}
        </main>
        // main section end 
        
    )
}

export default Product ;