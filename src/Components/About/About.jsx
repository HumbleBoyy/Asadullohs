import React, { useEffect, useState } from 'react';
import './about.css';
import { t } from 'i18next';
import Slider from 'react-slick';
import dataImages from "../../../public/data/pic.json"; 
import { GrProjects } from 'react-icons/gr';

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
          breakpoint: 1025,
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
      <section className='about' id='about'>
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
                <p className='about_text'>
                  {t("About.text")}
               </p>
               <p className='about_text'>
                  {t("About.textSecond")}
               </p>
               <div className="about_btn_wrapper">
               <div className='home_button'>
                    <a href="#projects" className='animation_btn about_section_btn'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <button className='home_btn'>
                      <GrProjects />
                      {t("About.textTitle")}
                      </button>
                    </a>
                </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
