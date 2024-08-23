import React, { Fragment, useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import swagger from '../services/swagger-img';
import axios from 'axios';
import welcome from '../assets/video/velocome2.mp4'
import home1 from '../assets/home-img/home1.jpg';
import home2 from '../assets/home-img/home2.jpg';
import home3 from '../assets/home-img/home3.jpg';
import home4 from '../assets/home-img/home4.jpg';
import home5 from '../assets/home-img/home5.jpg';
import home6 from '../assets/home-img/home6.jpg';
import home7 from '../assets/home-img/home7.jpg';
import home8 from '../assets/home-img/home8.jpg';
import home9 from '../assets/home-img/home9.jpg';
import home10 from '../assets/home-img/home10.jpg';
// import nazarbekov from '../assets/home-img/nazarbekov.MOV'



const Home = () => {
  const [data,setData] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
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

  useEffect(() => {
    const fetchFroduct = async () => {
      try {
        const { data } = await axios.get("https://parsingbot.pythonanywhere.com");
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFroduct();
  }, []);

  const handlePageClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = [...Array(pageCount).keys()];

  return (
    <div className=' w-full container pt-5 ttttt'>
      <div className='max-w-[1100px] m-auto'>
      <Slider {...settings} className=' m-auto container'>
        {
          swagger.map((item, index) => (
            <div key={index} className=' md:max-w-[300px] h-[200px] px-2'>
              <img className='object-cover w-full h-full' src={item.img} alt="" />
            </div>
          ))
        }
      </Slider>
      </div>
        
      <div className='max-w-[1100px] m-auto my-10'>
      <div className='md: flex items-center'>
      <div className='w-[800px]'>
        <video className='w-full h-[600px] object-cover rounded-lg' src={welcome} controls></video>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4 bg-gray-100'>
      <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={home1} alt={`Gallery image `}
            className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"/>
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-semibold">19-maktab</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={home1} alt={`Gallery image `}
            className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"/>
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-semibold">19-maktab</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={home2} alt={`Gallery image `}
            className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"/>
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-semibold">19-maktab</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={home3} alt={`Gallery image `}
            className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"/>
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-semibold">19-maktab</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={home4} alt={`Gallery image `}
            className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"/>
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-semibold">19-maktab</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src={home5} alt={`Gallery image `}
            className="w-full object-cover h-[200px] sm:h-[250px] lg:h-[300px] transition-opacity duration-300 hover:opacity-80"/>
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg font-semibold">19-maktab</p>
          </div>
        </div>
       
      </div>
      </div>

      <div>
        {/* <video src={nazarbekov}></video> */}
      </div>
      </div>

    </div>
  );
};

export default Home;
