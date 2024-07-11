import React, { Fragment, useEffect, useState } from 'react';
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



      <div className='px-6 mt-11'>
  {/* <div className='flex items-baseline justify-between'>
    <div className='max-w-[300px]'>
      <ul className=''>
        {[...Array(11)].map((_, index) => (
          <li key={index} className='border-b border-[#732323] pb-2 font-semibold text-[20px]'>
            <Link to={'/'}>BMSM directorining taqdimoti</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className='max-w-[700px]'>
      <h2 className='text-center'>Maktab yangiliklari</h2>
      {data.map((item, index) => (
        <div key={index}>
          <div className='flex'>
            <p>2024.14.06</p>
            <p>
              Ushbu o'quv dasturi 2015-yil 20-avgustdan boshlab O`zb.Res. Xalq ta'limi vazirligining 15-son (2 ilova) buyrug`i asosida tasdiqlangan. Bolalar musiqa va san'at maktabi umumta'lim maktabi bilan yaqin aloqada bo'lib, barkamol shaxsni tarbiyalashga yordam beradi. Bolalar musiqa va san'at maktabida o'qishning asosiy vazifasi o'quvchilarni badiiy madaniyatga jalb qilish, ularning tasviriy savodxonlik asoslarini o'rgatish, ularning estetik ta'limini tarbiyalash, shuningdek, o'rta maxsus ta'lim muassasalarida badiiy ta'limni davom ettirish uchun eng iqtidorli o'quvchilarni aniqlashdir.
            </p>
          </div>
          <Link to={'/'} className='ml-[450px]'>Batafsil</Link>
        </div>
      ))}
    </div>
  </div> */}

  <div class="wrapper">
            <div class="wrapper-left-link">
                <a href="#">BMSM directorining taqdimoti</a>
                <a href="#">Maktab ko'rsatkichlari</a>
                <a href="#">O'quvchilar uchun</a>
                <a href="#">O'quvchilar havfsizligi</a>
                <a href="#">Hamkorlik Memorandumlari</a>
                <a href="#">Mehnat Muhofazasi</a>
                <a href="#">Ota-onalar, Sizlar uchun!</a>
                <a href="#">Bizning yutuqlar</a>
                <a href="#">Bo'sh ish o'rinlari</a>
                <a href="#">Musiqa va san'at olamida</a>
                <a href="#">Ma'naviyat va Ma'rifat</a>
                <a href="#">Virtual Qabulxona</a>
            </div>
            <div class="wrapper-right-content -mt-[50px]">
                <div class="wrapper-right-first-box">
                    <div class="wr-ri-first-box-title">
                        <h1>Maktab yangiliklari</h1>
                    </div>
                    <div class="wr-ri-first-box-wrap">

                        <div class="big">
                            {/* <div class="box-top">
                                <h2>20</h2>
                            </div>
                            <div class="box">
                                <h2 class="h22w">may</h2>
                            </div> */}
                        </div>
                        
                        <div class="wr-ri-first-box-wrap-text ">
                            {
                              data.map((item,index) =>(
                                <div className='mt-5'>
                                  <Fragment>
                                  <p>{item.description.slice(0,400)}</p>
                                  <div className='w-full flex justify-end -mt-8'>
                                  <a href="#" className=''>Batafsil</a>
                                  </div>
                                </Fragment>
                                </div>
                              ))
                            }
                        </div>
                    </div>
                </div>
                </div>
            </div>
</div>

    </div>
  );
};

export default Home;
