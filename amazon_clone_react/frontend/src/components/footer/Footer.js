import '../footer/Footer.css';
import PublicIcon from '@mui/icons-material/Public';

const Footer = ()=>{
    return(
    <footer>
     {/* footer panel 1 start */}
    <div class="footer_panel1">
        Back to top
    </div>
     {/* footer panel 1 end */}

     {/* footer panel 2 start */}
    <div class="footer_panel2">
        <ul>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Investor Relations</a>
            <a>Amazon Devices</a>
            <a>Amazon Science</a>
        </ul>

        <ul>
            <p>Make Money with Us</p>
            <a>Sell products on Amazon</a>
            <a>Sell on Amazon Business</a>
            <a>Sell apps on Amazon</a>
            <a>Become an Affiliate</a>
            <a>Advertise Your Products</a>
            <a>Self-Publish with Us</a>
            <a>›See More Make Money with Us</a>
        </ul>

        <ul>
            <p>Amazon Payment Products</p>
            <a>Amazon Business Card</a>
            <a>Shop with Points</a>
            <a>Reload Your Balance</a>
            <a>Amazon Currency Converter</a>
        </ul>

        <ul>
            <p>Let Us Help You</p>
            <a>Amazon and COVID-19</a>
            <a>Your Account</a>
            <a>Your Orders</a>
            <a>Shipping Rates & Policies</a>
            <a>Return & Replacements</a>
            <a>Manage Your Conent and Devices</a>
            <a>Amazon Assistant</a>
            <a>Help</a>
        </ul>
    </div>
     {/* footer panel 2 start end */}

     {/* footer panel 3 star */}
    <div class="footer_panel3">
        <img src="http://localhost:8000/images/amazon_logo.png" alt=""></img>
        <div class="language_content">
            <PublicIcon />
            <h5>English</h5>
            <i id="down" class="fa-solid fa-caret-down"></i>
        </div> 
    </div>
     {/* footer panel 3 end */}

     {/* footer panel 4 start */}
    <div class="footer_panel4">
        <div class="footer_content">
            <a href="">Conditions of Use & Sale</a>
            <a href="">Privacy Notice</a>
            <a href="">Interest-Based Ads</a>
        </div>
        <div class="copyright">
            © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
    </div>
     {/* footer panel 5 end */}
</footer>
    )
}
export default Footer;