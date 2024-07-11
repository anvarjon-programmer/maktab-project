import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './carousel.css'; // Import the custom CSS file
import Slider from "react-slick";
import swagger from '../services/swagger-img';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data,setData] = useState([])
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

  useEffect(() =>{
    const fetchFroduct = async () =>{
      try{
        const {data} = await axios.get("https://parsingbot.pythonanywhere.com")
        setData(data)
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    fetchFroduct()
  },[])

  return (
    <div className='h-screen w-full container pt-5 ttttt'>
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



      <div className='px-6 mt-11'>
        <div className='flex items-center justify-between'>
          <div>
            <ul>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li><li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li><li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
              <li className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
                 <Link to={'/'}>BMSM directorining taqdimoti</Link>
              </li>
            </ul>
          </div>
        <div className=''>
          {data.map((item,index) =>(
             <div>
                <div className='flex justify-between w-full'>
                  <img src={item.file} alt="" />
                    <h1 className='px-5'>{item.created_at.slice(0,10)}</h1>
                    {/* <h1>title{item.title}</h1> */}
                    <h1>{item.description.slice(0,80)}</h1>
              </div>
                    <button className='ml-auto'>Read more</button>
             </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
