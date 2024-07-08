import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './carousel.css'; // Import the custom CSS file
import Slider from "react-slick";
import swagger from '../services/swagger-img';

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className='h-screen w-full container max-w-[1100px] pt-5 ttttt'>
      <div>
      <Slider {...settings} className='max-w-[1100px] m-auto '>
        {
          swagger.map((item, index) => (
            <div key={index} className='md:max-w-[300px] h-[200px] px-2'>
              <img className='object-cover w-full h-full' src={item.img} alt="" />
            </div>
          ))
        }
      </Slider>
      </div>
    </div>
  );
};

export default Home;
