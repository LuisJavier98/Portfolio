import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { flags } from '../Projects'



const Header = ({ language, isActive, handleChange, headers, dark, handleLanguage, handleDark }) => {


  return (
    <header ref={headers} className={isActive ? 'card_header' : 'card_header_inactive'} style={{ backgroundColor: dark ? 'rgb(0,0,0,0.9)' : 'rgba(219, 228, 237,0.9)' }}>
      <li className='buttons'>
        <button style={{ backgroundImage: language ? `url(${flags[0]})` : `url(${flags[1]})` }} className='button_language' onClick={handleLanguage}></button>
        <button style={{ backgroundColor: dark ? 'rgb(221, 215, 215)' : 'rgb(62, 59, 59)', color: dark ? 'black' : 'white' }} className='button_dark' onClick={handleDark}>{dark ? <BsSun /> : <BsMoon />}</button>
      </li>
      <li onClick={handleChange} className='card_close' style={{ color: dark ? 'white' : "black", transition: 'all 500ms ease' }}>
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