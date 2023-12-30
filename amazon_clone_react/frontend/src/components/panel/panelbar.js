// import css file
import '../panel/panelbar.css';
//menu icon
import MenuIcon from '@mui/icons-material/Menu';
//arrowdrop icon
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//arrow forward icon
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Panelbar = ()=>{
    return(
        <div class="panel">
            {/* Left Panel */}
            <div class='left-panel'>
                <div class="left-panel-all">
                    <MenuIcon id="manu_icon" />
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
                    <div class="opction_list"><p>Prime <ArrowDropDownIcon id="arrow_dd_icon" /></p></div>
                    <div class="opction_list"><p>New Releases</p></div>
                </div>
            </div>
            {/* Right Panel */}
            <div class='right-panel'>
                <div class='right-panel-opction'>
                    <div class="opction_list"><p class="festival"><span>Great India Festival Finale days</span></p></div>
                    <div class="opction_list"><p class="vertical">|</p></div>
                    <div class="opction_list"><p class="shop-now"> SHOP NOW </p></div>
                    <div class="opction_list"><ArrowForwardIosIcon id="arrow_f_icon" /></div>
                </div>
            </div>
        </div>
    )
}
export default Panelbar