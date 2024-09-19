import React, { useEffect, useState } from 'react';
import './about.css';
import { t } from 'i18next';
import Slider from 'react-slick';
import dataImages from "../../../public/data/pic.json"; 

const About = () => {
  const settings = {
    dots: false,
    numbers:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    arrows: false,
    autoplaySpeed: 10000,
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
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

  const [data, setData] = useState([]);

  
  useEffect(() => {
    setData(dataImages.picturesArray); 
  }, []);

  return (
    <>
      <section className='about'>
        <div className="container">
          <div className='about_title_wrapper'>
            <h2 className='about_title'>{t("Navbar.about")}</h2>
          </div>

          <div className="about_items_wrapper">
            <div className="about_left_item slider-container">
              <Slider {...settings}>
                {data && data.length > 0 && data.map((item, index) => (
                  <div key={index} className='about_slide_image_wrapper'>
                    <img src={item.picture} alt={`Slide ${index}`} className='about_image' />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="about_right_item">
                <h2 className='TextTitle'>{t("About.textTitle")}</h2>
                <p className='about_text'>
                  {t("About.text")}
               </p>
               <p className='about_text'>
                  {t("About.textSecond")}
               </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
