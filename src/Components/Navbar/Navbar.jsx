import React, { useState } from 'react'
import "./navbar.css"
import { useTranslation } from 'react-i18next'



import ModeDark from '../DarkMode/ModeDark';
import images from '../../assets/images';

const Navbar = () => {
    const {t, i18n} = useTranslation();
    const [toggle, setToggle] = useState(false)

    const currentlanguage = localStorage.getItem("i18nextLng");
    const [activeLink, setActiveLink] = useState('');


    const handleChange = (event) => {
      //   const selectedLanguage = event.target.value;
        i18n.changeLanguage(event);
   }
  return (
    <>
    <section className='navbar'>
       <div className="container">
          <nav className='navbar_nav'>
             <div className="navbar_logo">
                 <a href="#" className='Logo_name'>Asadullohs</a>
             </div>
             <ul className='navbar_menu_links wrapper'>
                <li><a href="#home" className='menu_links'>{t('Navbar.home')}</a></li>
                <li><a href="#home" className='menu_links'>{t('Navbar.about')}</a></li>
                <li><a href="#home" className='menu_links'>{t('Navbar.projects')}</a></li>
                <li><a href="#home" className='menu_links'>{t('Navbar.contact')}</a></li>
                <div className="navbar_right">
                 <ModeDark/>
                 <div className="languages">
                  <img onClick={()=> handleChange('uz')} className='Flags_img' src={images.uzbek} alt="Uzbek_Flag" />
                  <img onClick={()=> handleChange('en')} className='Flags_img' src={images.england} alt="England_Flag" />
                  <img onClick={()=> handleChange('ru')} className='Flags_img' src={images.russan} alt="Russian_Flag" />
                 </div>
                </div>
             </ul>
          </nav>
       </div>
    </section>
    </>
  )
  
}

export default Navbar
