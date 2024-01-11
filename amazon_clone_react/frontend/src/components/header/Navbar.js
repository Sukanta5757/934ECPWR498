// import css file
import '../header/Navbar.css';
//location icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
//search icon
import SearchIcon from '@mui/icons-material/Search';
//menu icon
import MenuIcon from '@mui/icons-material/Menu';
//shopping cart icon 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



const Navbar = ()=> {
    return (

        <header>
            {/* Navbar */}
            <div class="navbar">
                {/* left navbar  */}
                <div class="left_navbar">
                    {/* box1  */}
                    <Link to="/home">
                    <div className="nav-logo">
                        <img src="http://localhost:8000/images/amazon_logo.png" alt="amazon logo"></img>
                    </div >
                    </Link>
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
                    <Link to="/OrderReturn">
                    <div class='nav-order'>
                        <div class="order_inner">
                        <p class="returns"><span>Returns</span></p>
                        <p class="orders">& Orders</p></div>
                    </div>
                    </Link>
                    {/* box6  */}
                    <Link to="/shoppingcartpage">
                    <div class='nav-cart'>
                        <ShoppingCartIcon id="carticon"/>
                        <p class="cart">Cart</p>
                    </div>
                    </Link>

                    <div class="left-panel-all">
                        <MenuIcon id="manu_icon" />
                        {/* <p>All</p> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar