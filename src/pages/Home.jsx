import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='h-screen container py-4'>
      <Slider {...settings}>
      <div>
        <img src="https://img.freepik.com/free-photo/texture-treble-clef-dark-background-isolated-generative-ai_169016-29581.jpg" alt="" />
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/1076840920/vector/music-background.jpg?s=612x612&w=0&k=20&c=bMG2SEUYaurIHAjtRbw7bmjLsXyT7iJUvAM5HjL3G3I=" alt="" />
      </div>
      <div>
      <img src="https://img.freepik.com/free-photo/texture-treble-clef-dark-background-isolated-generative-ai_169016-29581.jpg" alt="" />
      </div>
      <div>
      <img src="https://media.istockphoto.com/id/1076840920/vector/music-background.jpg?s=612x612&w=0&k=20&c=bMG2SEUYaurIHAjtRbw7bmjLsXyT7iJUvAM5HjL3G3I=" alt="" />
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
  )
}

export default Home