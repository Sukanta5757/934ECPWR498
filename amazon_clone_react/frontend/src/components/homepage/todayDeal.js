 
import '../homepage/TodayDeal.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


 const Arrow = ({onClick})=> {
    return (
        <button class="today_deals_btn" onClick={onClick} id="today_deal_btn_prev" >
            &#10094;
        </button>
    )
  };
  const Arrowa = ({onClick})=> {
    return (
        <button class="today_deals_btn" onClick={onClick} id="today_deal_btn_next" >
            &#10095;
        </button>
    )
  };


function TodayDeal() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <Arrowa />,
    prevArrow: <Arrow />,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    
    <div className='today_deals_container'>
        <div class="today_deals_heading">
            <h1>Today's Deals</h1>
            <a href="">See all deals</a>
        </div>
      <div className="today_deals_product">
      <Slider {...settings}>
        {todayDeal.map((d) => (
          <div key={d.discount} className="today_deals_product_list">
                <div class="today_deals_item">
                    <div class="today_img">
                        <img src={d.img}/>
                    </div>
                    <div class="discount">
                        <a href="#">Up to {d.discount}52% off</a>
                        <a href="#">{d.DealOfDay}</a>
                    </div>
                    <p>{d.desc}</p>
                </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const todayDeal = [
    {
        img : "http://localhost:8000/images/box1_image.jpg",
        discount : 1,
        DealOfDay : "Deal of the Day",
        desc : " Grand Gaming Days offers on Bestselling Gaming Laptops & Desktops - Exchange & No Cost EMI Available"
    },
    {
        img : "http://localhost:8000/images/box2_image.jpg",
        discount : 2,
        DealOfDay : "Deal of the Day",
        desc : "High Performance Handpicked Desktop Computers from HP, Lenovo and more"
    },
    {
        img : "http://localhost:8000/images/box3_image.jpg",
        discount : 3,
        DealOfDay : "Deal of the Day",
        desc : "Best Prices on boAt Headphones, Soundbars and Speakers"
    },
    {
        img : "http://localhost:8000/images/box4_image.jpg",
        discount : 4,
        DealOfDay : "Deal of the Day",
        desc : "Jaw dropping deals on headsets"
    },

    {
        img : "http://localhost:8000/images/box5_image.jpg",
        discount : 5,
        DealOfDay : "Deal of the Day",
        desc : "adidas & campus Footwear"
    },
    {
        img : "http://localhost:8000/images/box6_image.jpg",
        discount : 6,
        DealOfDay : "Deal of the Day",
        desc : "Grand Gaming Days Offers on Accessories and Storage Devices"
    },

    {
        img : "http://localhost:8000/images/box7_image.jpg",
        discount : 7,
        DealOfDay : "Deal of the Day",
        desc : "cooking essential"
    },
    {
        img : "http://localhost:8000/images/box8_image.jpg",
        discount : 8,
        DealOfDay : "Deal of the Day",
        desc : "TOP Deals on PUMA & Skechers footwear"
    },

    {
        img : "http://localhost:8000/images/box7_image.jpg",
        discount : 9,
        DealOfDay : "Deal of the Day",
        desc : "Handpicked Intel Powered Laptops; High Performance"
    },
    {
        img : "http://localhost:8000/images/box8_image.jpg",
        discount : 10,
        DealOfDay : "Deal of the Day",
        desc : "Powerbank from Mi, Ambrane, URBN and more"
    },

    {
        img : "http://localhost:8000/images/box2_image.jpg",
        discount : 11,
        DealOfDay : "Deal of the Day",
        desc : "Top deals on Truke, Govo and more"
    },
    {
        img : "http://localhost:8000/images/box7_image.jpg",
        discount : 12,
        DealOfDay : "Deal of the Day",
        desc : "Amazing deals on pTron, Jabra, Portronics"
    },
    {
        img : "http://localhost:8000/images/box6_image.jpg",
        discount : 13,
        DealOfDay : "Deal of the Day",
        desc : "Levi's, Allen Solly, ANNI DESIGNER, Janasya & more"
    },
    {
        img : "http://localhost:8000/images/box5_image.jpg",
        discount : 14,
        DealOfDay : "Deal of the Day",
        desc : "Exciting  deals on Mivi, Wecool, Wings"
    },
    {
        img : "http://localhost:8000/images/box4_image.jpg",
        discount : 15,
        DealOfDay : "Deal of the Day",
        desc : "Never before deals on HP printers"
    },
    {
        img : "http://localhost:8000/images/box3_image.jpg",
        discount : 16,
        DealOfDay : "Deal of the Day",
        desc : "Vivo Y75 - 18W fast charge, FHD plus display"
    },
    {
        img : "http://localhost:8000/images/box2_image.jpg",
        discount : 17,
        DealOfDay : "Deal of the Day",
        desc : "Nokia 5710 - newly launched 4G feature phone"
    },
    {
        img : "http://localhost:8000/images/box1_image.jpg",
        discount : 18,
        DealOfDay : "Deal of the Day",
        desc : "Vacuum Cleaners from Top Brands"
    }
];

export default TodayDeal;