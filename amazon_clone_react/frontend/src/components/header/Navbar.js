// import css file
import '../header/Navbar.css';
//location icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
//search icon
import SearchIcon from '@mui/icons-material/Search';
//arrowdrop icon
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//shopping cart icon 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//menu icon
import MenuIcon from '@mui/icons-material/Menu';
//arrow forward icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Navbar = ()=> {
    return (

        <header>
            {/* Navbar */}
            <div class="navbar">
                {/* left navbar  */}
                <div class="left_navbar">
                    {/* box1  */}
                    <a href="/home" class="nav-logo">
                        <img src="http://localhost:8000/images/amazon_logo.png" alt="amazon logo"></img>
                    </a >
                    {/* box2  */}
                    <div class="nav-address">
                        <div class="address_inner">
                            <p class="deliver-to">Deliver to</p>
                            <div class="add-icon">
                                <LocationOnIcon id="locationicon" />
                                <p class="india">India</p>
                            </div>
                        </div>
                    </div>
                    {/* box3  */}
                    <div class="nav-search-bar">
                        <select class="search-select">
                            <option class="select-all">All</option>
                        </select>
                        <input class="search-input" type="text" name="" id="" placeholder="Search Product" ></input>
                        <div class="search-icon">
                            <SearchIcon id="searchicon"/>
                        </div>
                    </div>
                </div>

                {/* right navbar */}
                <div class="right_navbar">
                    {/* box4  */}
                    <div class='nav-signin'>
                        <div class="signin_inner">
                            <p class="signin"><span>Helo, Sign in</span></p>
                            <p class="account-list">Account & List</p>

                            {/*sign & list  box  */}
                            <div class="sign_list_box">
                                <div class="shape"></div>
                                
                                <div class="sign_account_bar">
                                    <div class="signin_bar">
                                        <a class="signin_btn" href="">
                                            <button>Sign in</button>
                                        </a>
                                        <p>New customer?<a href=""> Start here.</a></p>
                                    </div>

                                    <div class="account_list_bar">
                                        <ul class="list_bar">
                                            <h1>Your Lists</h1>
                                            <a href="">Create a Wish List</a>
                                            <a href="">Wish from Any Website</a>
                                            <a href="">Body Wishlist</a>
                                            <a href="">Discover Your Style</a>
                                            <a href="">Explore Showroom</a>
                                            <a href="">Logout</a>
                                        </ul>

                                        <ul class="account_bar">
                                            <h1>Your Account</h1>
                                            <a href="">Your Account</a>
                                            <a href="">Your Orders</a>
                                            <a href="">Your Wish List</a>
                                            <a href="">Your Rexommendations</a>
                                            <a href="">Your Payment Methods</a>
                                            <a href="">Your Prime Membership</a>
                                            <a href="">Your Prime video</a>
                                            <a href="">Your Subscribe & Save Items</a>
                                            <a href="">Memberships & Subscriptions</a>
                                            <a href="">Your Seller Account</a>
                                            <a href="">Manage Your Content and Devices</a>
                                            <a href="">Your Free Amazon Business Account</a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* box5  */}
                    <a href="/OrderReturn" class='nav-order'>
                        <div class="order_inner">
                        <p class="returns"><span>Returns</span></p>
                        <p class="orders">& Orders</p></div>
                    </a>
                    {/* box6  */}
                    <a href="/Carts" class='nav-cart'>
                        <ShoppingCartIcon id="carticon"/>
                        <p class="cart">Cart</p>
                    </a>
                </div>
            </div>
            {/* Panel */}
            {/* Left Panel */}
            <div className="panel">
                <div className="left-panel">
                    {/* Box1 */}
                    <div className="left-all">
                        <MenuIcon className='manuicion'/>
                        <p className="all">All</p>
                    </div>
                    {/* box2 */}
                    <div className="left-opection">
                    <p>Amazon MiniTV</p>
                    <p>Sell</p>
                    <p>Best Sellers</p>
                    <p>Today's Deals</p>
                    <p>Mobiles</p>
                    <p>Customer Service</p>
                    <p>Electronics</p>
                    <p>Prime <i class="fa-solid fa-caret-down"></i></p>
                    <p>New Releases</p>
                    </div>
                </div>
                {/* Right Panel */}
                <div className="right-panel">
                    {/* Box3 */}
                    <div className="right-opction">
                        <p className="festival">Great Indian Festival Finale days</p>
                        <p class="vertical">|</p>
                        <p className="shop-now">SHOP NOW</p>
                        <ArrowForwardIosIcon/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar