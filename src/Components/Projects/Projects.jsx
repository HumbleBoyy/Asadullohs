import { t } from 'i18next'
import React, { useEffect, useState } from 'react'
import "./projects.css"
import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import image from "../../../public/imagesPub/asadullohsOne.jpg"
import { FaGithub, FaShare } from 'react-icons/fa'
import Slider from 'react-slick';
import { MdEmail } from 'react-icons/md';

const Projects = () => {
   const settings = {
      dots: true,
      numbers:true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      arrows: false,
      autoplaySpeed: 10000,
      cssEase: "linear",
      responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 900,
            settings: {
               dots: false,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 578,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    };
    const [projects, setProjects] = useState([]);

    const getProjects =  async () => {
      const querySnapshot =  await getDocs(collection(firestore, 'projects'));
      setProjects( querySnapshot.docs.map((doc)=> doc.data()))
     }
     useEffect(()=> {
      getProjects();
 },[])


 const renderProjects = (projects) => {
     return(
      <>
      <div className="slider-container slider_wrapper">
        <Slider {...settings}>
        {
           projects.map((item, index)=> {
              return(
                  <div className="project_box" key={index}>
                     <img src={item.image} alt="Asadullohs_Project_Image" 
                        className='project_image'
                     />
                     <div className="content_project">
                        <a href="#" className='Project_title'>{item.name}</a>
                        <p className='Project_paragraph'>{item.description}</p>
                        <div className="project_buttons_wrapper">
                           <a href="#" onClick={()=> window.open(item.url)}><button className='project_btn'><FaShare />{t("About.visit")}</button></a>
                           <a href="#" onClick={()=> window.open(item.urlgithub)}><button className='project_btn'><FaGithub />GitHub</button></a>
                        </div>
                     </div>
                  </div>
              )
           })
        }
        </Slider>
        </div>
      </>
     )
 }

  return (
    <>
       <section className='projects' id='projects'>
          <div className="container">
              <div className="project_title_wrapper">
                   <h2 className='projects_title'>{t("Navbar.projects")}</h2>
              </div>

              <div className="projects_wrapper">
                {renderProjects(projects)}
              </div>

              <div className="projects_btn">
              <div className='home_button'>
                    <a href="#contact" target='blank' className='animation_btn project_edition'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    <button className='home_btn'>
                    <MdEmail />{t("Navbar.contact")}
                    </button></a>
                 </div>
              </div>
          </div>
       </section>
    </>
  )
}

export default Projects
