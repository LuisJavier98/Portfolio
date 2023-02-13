import React, { useRef } from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineCopyright } from 'react-icons/ai'


const Footer = ({ language, dark }) => {
  const año = new Date
  const Footer = useRef()
  const tiltEffect = e => {
    const marginX = (window.innerWidth - e.target.clientWidth) / 2
    const marginY = (window.innerHeight - e.target.clientHeight) / 2
    const perspectiveX = e.clientX - marginX - (e.target.clientWidth / 2)
    const perspectiveY = e.clientY - marginY - (e.target.clientHeight / 2)
    Footer.current.style.transitionTimingFunction = 'ease-out'
    Footer.current.style.transitionDuration = '300ms'
    Footer.current.style.transform = `perspective(2700px) translate3d(0,0,50px) rotateX(${-perspectiveY / 45}deg) rotateY(${perspectiveX / 45}deg) `
  }
  const disableAnimation = () => {
    Footer.current.style.transform = ''
    Footer.current.style.transitionTimingFunction = ''
    Footer.current.style.transitionDuration = ''
  }

  return (
    <footer style={{ background: dark ? ' linear-gradient(to top, #181818, rgb(87, 82, 82))' : 'linear-gradient(to top, rgba(219, 228, 237, 255), rgb(87, 82, 82))' }} className='card_contactMe' id='contactMe'>
      <h2 className='card_contact' style={{ color: dark ? 'white' : 'black' }}> {language ? 'Contact Me' : 'Contactame'}</h2>
      <form ref={Footer} onMouseMove={tiltEffect} onMouseOut={disableAnimation} data-aos="flip-up" data-aos-duration="500" action='https://formsubmit.co/luisjavier_2705@hotmail.com' method='POST' className='card_info'>
        <label htmlFor=""><p>{language ? 'First Name' : 'Nombres'}</p></label>
        <input type="text" name='first_name' required autoComplete='off' />
        <label htmlFor=""><p>{language ? 'Last Name' : 'Apellidos'}</p></label>
        <input type="text" name='last_name' required autoComplete='off' />
        <label htmlFor=""><p> {language ? 'Email' : 'Correo Electronico'}</p></label>
        <input type="email" name='email' required autoComplete='off' />
        <label htmlFor="number"> <p>{language ? 'Phone Number' : 'Celular'}</p></label>
        <input type="number" name='number' required autoComplete='off' />
        <label htmlFor=""><p>{language ? 'Message' : 'Mensaje'}</p></label>
        <textarea name="message" id="" cols="30" rows="10" required ></textarea>
        <button type='submit' className='button_send'>{language ? 'Send' : 'Enviar'}</button>
      </form>

      <div style={{ backgroundColor: dark ? '' : 'rgb(87, 82, 82)' }} className='card_icons'>
        <a href="https://www.linkedin.com/in/luis-javier-burga-campos-97bb77186/" target={'_blank'}><AiOutlineLinkedin /></a>
        <a href="https://github.com/LuisJavier98" target={'_blank'}><BsGithub /></a>
        <a href="https://www.instagram.com/luisjavier.98/" target={'_blank'}><BsInstagram /></a>
      </div>
      <blockquote style={{ margin: '0px', textAlign: 'center', color: 'white', backgroundColor: dark ? '' : 'rgb(87, 82, 82)' }}><AiOutlineCopyright /> Copyright {año.getFullYear()}</blockquote>

    </footer>
  )
}

export default Footer