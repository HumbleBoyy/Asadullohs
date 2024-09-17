import { t } from 'i18next'
import './home.css'
import Navbar from '../Navbar/Navbar'
import { FaGithub } from 'react-icons/fa'
import { GrProjects } from 'react-icons/gr'
const Home = () => {
  return (
    <>
    <Navbar/>
      <section id='home' className='home'>
        <div className="container">
           <div className="home_items_wrapper">
              <div className="home_item_right">
                 <h1 className='greeting'>{t("Home.greeting")}</h1>
                 <h2 className='name'>{t("Home.name")}</h2>
                 <h3 className='profession'>{t("Home.profession")}</h3>
                 <p className='info_paragraph'>{t("Home.paragraph")}</p>
                 <div className='home_buttons'>
                    <a href="#projects"><button className='home_btn'><GrProjects />{t("Home.btn1")}</button></a>
                    <a href="https://github.com/HumbleBoyy" target='blank'><button className='home_btn'><FaGithub />{t("Home.btn2")}</button></a>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default Home
