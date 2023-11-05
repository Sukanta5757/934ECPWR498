

const Navbar = ()=> {
    return (

        <header>
            {/* Navbar */}
            <div className="navbar">
                {/* Box1 */}
                <div className="nav-logo">
                    <div className="image"></div>
                </div>
                {/* Box2 */}
                <div className="nav-address">
                    <p className="deliver-to" >deliver</p>
                    <div className="add-icon">
                        <p className="icon">icon</p>
                        <p className="india"></p>
                    </div>
                </div>
                {/* Box3 */}
                <div className="nav-search-bar">
                    <select>
                        <option>All</option>
                    </select>
                    <input className="search-input" type="text" placeholder="Search Product" ></input>
                    <div className="search-icon">
                        <p>icon</p>
                    </div>
                </div>
                {/* Box4 */}
                <div className="nav-signin">
                    <p className="signin"><span>Hello sign in</span></p>
                    <p className="account-list">Account & Lists</p>
                </div>
                {/* Box5 */}
                <div className="nav-order">
                    <p className="return">Return</p>
                    <p className="order">& Order</p>
                </div>
                {/* Box6 */}
                <div className="nav-cart">
                    <p className="cart">Cart</p>
                </div>
            </div>
            {/* Panel */}
            {/* Left Panel */}
            <div className="left-panel">
                {/* Box1 */}
                <div className="left-all">
                    <p className="all">All</p>
                </div>
                {/* box2 */}
                <div className="left-opection">
                    <p className="mini-tv">Amazon MiniTV</p>
                    <p className="sell">Sell</p>
                    <p className="best-sellers">Best Sellers</p>
                    <p className="today-deals">Today's Deals</p>
                    <p className="mobiles">Mobiles</p>
                </div>
            </div>
            {/* Right Panel */}
            <div className="right-panel">
                {/* Box3 */}
                <div className="right-opction">
                    <p className="festival">Great Indian Festival Finale days</p>
                    <p className="shop-now">SHOP NOW</p>
                </div>
            </div>
        </header>
    )
}

export default Navbar