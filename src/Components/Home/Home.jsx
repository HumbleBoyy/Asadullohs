import { t } from 'i18next'
import './home.css'
import Navbar from '../Navbar/Navbar'
import { FaGithub } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
import images from '../../assets/images'
const Home = () => {
  return (
    <>
    <Navbar/>
      {/* <section id='home' className='home'>
        <div className="container">
           <div className="home_items_wrapper">
              <div className="home_item_right">
                 <h1 className='greeting'>{t("Home.greeting")}</h1>
                 <h2 className='name'>{t("Home.name")}</h2>
                 <h3 className='profession'>{t("Home.profession")}</h3>
                 <p className='info_paragraph'>{t("Home.paragraph")}</p>
                 <div className="home_Special_buttons">
                 <div className='home_button'>
                    <a href="#projects" className='animation_btn'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <button className='home_btn'>
                      <GrProjects />
                      {t("Home.btn1")}
                      </button>
                    </a>
                 </div>
                 <div className='home_button'>
                    <a href="https://github.com/HumbleBoyy" target='blank' className='animation_btn'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    <button className='home_btn'>
                      <FaGithub />{t("Home.btn2")}
                    </button></a>
                 </div>
                 </div>
              </div>


              <div className='right_side_of_home'>
                   <div className="box_image">
                      <div className='content'>
                         <img src={images.five} alt="Asadullohs_Picture" className='asadullohs_image'/>
                         <h2 className='image_name'>
                           {t("Home.image_name")}<br />
                           <span>{t("Home.profession")}</span>
                           </h2>
                           <a href="#contact" className='inner_contact_btn'>{t("Navbar.contact")}</a>
                      </div>
                   </div>
              </div>
           </div>
        </div>
      </section> */}
    </>
  )
}

export default Home
