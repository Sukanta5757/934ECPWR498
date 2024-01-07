import React from 'react';
import '../panel/Panel.css';
function Panel() {
  return (
    <div class="panel">
    {/* Left Panel */}
    <div class='left-panel'>
        <div class="left-panel-all">
            <i class="fa-solid fa-bars"></i>
            <p>All</p>
        </div>
        <div class="left-panel-opction">
            <div class="opction_list"><p>Amazon MiniTV</p></div>    
            <div class="opction_list"><p>Sell</p></div>
            <div class="opction_list"><p>Best Sellers</p></div>
            <div class="opction_list"><p>Today's Deals</p></div>
            <div class="opction_list"><p>Mobiles</p></div>
            <div class="opction_list"><p>Customer Service</p></div>
            <div class="opction_list"><p>Electronics</p></div>
            <div class="opction_list"><p>Prime <i class="fa-solid fa-caret-down"></i></p></div>
            <div class="opction_list"><p>New Releases</p></div>
        </div>
    </div>
    {/* Right Panel */}
    <div class='right-panel'>
        <div class='right-panel-opction'>
            <div class="opction_list"><p class="festival"><span>Great India Festival Finale days</span></p></div>
            <div class="opction_list"><p class="vertical">|</p></div>
            <div class="opction_list"><p class="shop-now"> SHOP NOW </p></div>
            <div class="opction_list"><i class="fa-solid fa-angles-right"></i></div>
        </div>
    </div>
</div>
  )
}

export default Panel;