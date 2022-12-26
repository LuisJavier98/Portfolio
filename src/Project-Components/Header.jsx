import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'



const Header = ({ language, isActive, handleChange, headers,dark }) => {
  

  return (
    <header ref={headers} className={isActive ? 'card_header' : 'card_header_inactive'}>
      <li onClick={handleChange} className='card_close' style={{ color: 'white' }}>
        <IoIosCloseCircleOutline />
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} onClick={handleChange} href="#home">{language ? 'Home' : 'Principal'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} onClick={handleChange} href="#aboutMe">{language ? 'About me' : 'Acerca de mi'} </a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} onClick={handleChange} href="#skills">{language ? 'Skills' : 'Habilidades'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} onClick={handleChange} href="#projects">{language ? 'Projects' : 'Proyectos'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} onClick={handleChange} href="#contactMe">{language ? 'Contact me' : 'Contactame'}</a>
      </li>
    </header>
  )
}

export default Header