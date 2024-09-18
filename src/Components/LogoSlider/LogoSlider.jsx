import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './logoslider.css'
import Slider from 'react-slick';
import images from '../../assets/images';
const LogoSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows:false,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
      };
  return (
     <>
     <div className="logoSlider">
        <div className="container">
         <div className="slider-container">
      <Slider {...settings}>
          <div className='logos_wrapper'>
             <img src={images.html} alt="Programming Languages" className='Logos'/>
          </div>
          <div className='logos_wrapper'>
             <img src={images.css} alt="Programming Languages" className='Logos'/>
          </div>
          <div className='logos_wrapper'>
             <img src={images.js} alt="Programming Languages" className='Logos'/>
          </div>
          <div className='logos_wrapper'>
             <img src={images.react} alt="Programming Languages" className='Logos'/>
          </div>
          <div className='logos_wrapper'>
             <img src={images.nextjs} alt="Programming Languages" className='Logos_next'/>
          </div>
          <div className='logos_wrapper'>
             <img src={images.sass} alt="Programming Languages" className='Logos'/>
          </div>
          <div className='logos_wrapper'>
             <img src={images.typescript} alt="Programming Languages" className='Logos'/>
          </div>
          <div className='logos_wrapper'>
             <img src={images.tailwindcss} alt="Programming Languages" className='Logos_next'/>
          </div>
      </Slider>
         </div>
     </div>
     </div>
     </>
  )
}

export default LogoSlider
