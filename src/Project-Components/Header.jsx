import React from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'



const Header = ({ language, isActive, handleChange, headers, dark }) => {


  return (
    <header ref={headers} className={isActive ? 'card_header' : 'card_header_inactive'} style={{backgroundColor:dark?'#181818 ':'rgba(219, 228, 237, 255)'}}>
      <li onClick={handleChange} className='card_close' style={{ color: 'white', transition: 'all 500ms ease' }}>
        <IoIosCloseCircleOutline />
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#home">{language ? 'Home' : 'Principal'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#aboutMe">{language ? 'About me' : 'Acerca de mi'} </a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#skills">{language ? 'Skills' : 'Habilidades'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#projects">{language ? 'Projects' : 'Proyectos'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#contactMe">{language ? 'Contact me' : 'Contactame'}</a>
      </li>
    </header>
  )
}

export default Header