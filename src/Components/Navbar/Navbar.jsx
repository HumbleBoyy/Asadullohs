import React, { useState } from 'react'
import "./navbar.css"
import { useTranslation } from 'react-i18next'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { Button, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Portal, useDisclosure } from '@chakra-ui/react'
import { IoMdArrowDropdown, IoMdMenu } from 'react-icons/io'
import { AiOutlineClose } from "react-icons/ai";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {
    const {t, i18n} = useTranslation();
    const [toggle, setToggle] = useState(false)

    const currentlanguage = localStorage.getItem("i18nextLng");
    const [activeLink, setActiveLink] = useState('');


    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
   }
  return (
    <>
    <section className='navbar'>
       <div className="container">
          <nav className='navbar_nav'>
             <div className="navbar_logo">
                
                Hello
             </div>
          </nav>
       </div>
    </section>
    </>
  )
  
}

export default Navbar
