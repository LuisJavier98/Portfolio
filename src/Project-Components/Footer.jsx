import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineCopyright } from 'react-icons/ai'


const Footer = ({ language, dark }) => {


  return (
    <footer style={{ background: dark ? ' linear-gradient(to top, #181818, rgb(87, 82, 82))' : 'linear-gradient(to top, rgba(219, 228, 237, 255), rgb(87, 82, 82))' }} className='card_contactMe' id='contactMe'>
      <h2 className='card_contact' style={{ color: dark ? 'white' : 'black' }}> {language ? 'Contact Me' : 'Contactame'}</h2>
      <form data-aos="flip-up" data-aos-duration="500" action='https://formsubmit.co/luisjavier_2705@hotmail.com' method='POST' className='card_info'>
        <label htmlFor="">{language ? 'First Name' : 'Nombres'}</label>
        <input type="text" name='first_name' required autoComplete='off' />
        <label htmlFor="">{language ? 'Last Name' : 'Apellidos'}</label>
        <input type="text" name='last_name' required autoComplete='off' />
        <label htmlFor="">{language ? 'Email' : 'Correo Electronico'}</label>
        <input type="email" name='email' required autoComplete='off' />
        <label htmlFor="number">{language ? 'Phone Number' : 'Celular'}</label>
        <input type="number" name='number' required autoComplete='off' />
        <label htmlFor="">{language ? 'Message' : 'Mensaje'}</label>
        <textarea name="message" id="" cols="30" rows="10" required ></textarea>
        <button  type='submit' className='button_send'>{language ? 'Send' : 'Enviar'}</button>
      </form>
      <div style={{ backgroundColor: dark ? '' : 'rgb(87, 82, 82)' }} className='card_icons'>
        <a href="https://www.linkedin.com/in/luis-javier-burga-campos-97bb77186/" target={'_blank'}><AiOutlineLinkedin /></a>
        <a href="https://github.com/LuisJavier98" target={'_blank'}><BsGithub /></a>
        <a href="https://www.instagram.com/luisjavier.98/" target={'_blank'}><BsInstagram /></a>
      </div>
      <blockquote style={{ margin: '0px', textAlign: 'center', color: 'white', backgroundColor: dark ? '' : 'rgb(87, 82, 82)' }}><AiOutlineCopyright /> Copyright 2022</blockquote>
    </footer>
  )
}

export default Footer