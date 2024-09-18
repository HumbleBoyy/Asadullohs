import React, { useState } from 'react'
import "./navbar.css"
import { useTranslation } from 'react-i18next'



import ModeDark from '../DarkMode/ModeDark';
import images from '../../assets/images';
import { RiMenu2Line } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
    const {t, i18n} = useTranslation();
    const [toggle, setToggle] = useState(false)

    const currentlanguage = localStorage.getItem("i18nextLng");
    const [activeLink, setActiveLink] = useState('');


    const handleChange = (event) => {
      //   const selectedLanguage = event.target.value;
        i18n.changeLanguage(event).then(()=> {
           window.location.reload();
        });
   }
  return (
    <>
    <section className='navbar'>
       <div className="container">
          <nav className='navbar_nav'>
             <div className="navbar_logo">
                 <a href="#" className='Logo_name' data-text="Asadullohs">Asadullohs</a>
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

             {/* Navbar Menu For Small Devices */}

             <div className="navbar_small_device">
                <div className="hamburgermenu_wrapper">
                  <ModeDark/>
                <div className="circle_hamburger">
                  <RiMenu2Line 
                  onClick={()=> setToggle(true)}
                    cursor={'pointer'}
                    fontSize={27}
                  />
                </div>
                </div>
             {toggle && (
               <>
               <div className='small_device_navbar'>
                  <div className="close_menu_wrapper">
                     <div className="languages">
                     <img onClick={()=> handleChange('uz')} className='Flags_img' src={images.uzbek} alt="Uzbek_Flag" />
                     <img onClick={()=> handleChange('en')} className='Flags_img' src={images.england} alt="England_Flag" />
                     <img onClick={()=> handleChange('ru')} className='Flags_img' src={images.russan} alt="Russian_Flag" />
                     </div>
                     <div className="close_circle">
                     <GrClose 
                      onClick={()=> setToggle(false)}
                       cursor={'pointer'}
                       fontSize={27}
                     /> 
                     </div>
                  </div>
                  <div className='divider'/>
                <ul className='navbar_menu_small_device_links_wrapper'>
                  <li><a href="#home" className='menu_links' onClick={()=> setToggle(false)}>{t('Navbar.home')}</a></li>
                  <li><a href="#home" className='menu_links' onClick={()=> setToggle(false)}>{t('Navbar.about')}</a></li>
                  <li><a href="#home" className='menu_links' onClick={()=> setToggle(false)}>{t('Navbar.projects')}</a></li>
                  <li><a href="#home" className='menu_links' onClick={()=> setToggle(false)}>{t('Navbar.contact')}</a></li>
                </ul>
                 </div>
               </>
             )}
             </div>
          </nav>
       </div>
    </section>
    </>
  )
  
}

export default Navbar
