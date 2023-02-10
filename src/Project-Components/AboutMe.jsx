import React, { useRef } from 'react'
import CV from '../CV/CV_Luis_Burga.pdf'
import { BsDownload } from 'react-icons/bs'
import image from '../Images/Foto.png'



const AboutMe = ({ language, dark }) => {
  const Card = useRef()
  const tiltEffect = e => {
    const marginX = (window.innerWidth - e.target.clientWidth) / 2
    const marginY = (window.innerHeight - e.target.clientHeight) / 2
    const perspectiveX = e.clientX - marginX - (e.target.clientWidth / 2)
    const perspectiveY = e.clientY - marginY - (e.target.clientHeight / 2)
    Card.current.style.transitionTimingFunction = 'ease-out'
    Card.current.style.transitionDuration = '300ms'
    Card.current.style.transform = `perspective(2700px) translate3d(0,0,50px) rotateX(${-perspectiveY / 30}deg) rotateY(${perspectiveX / 30}deg) `
  }
  const disableAnimation = () => {
    Card.current.style.transform = ''
    Card.current.style.transitionTimingFunction = ''
    Card.current.style.transitionDuration = ''
  }

  return (
    <div className={dark ? 'card_aboutMe' : 'card_aboutMeLight'} id='aboutMe' >
      <h2 style={{ color: dark ? 'white' : 'black', textAlign: 'center', margin: '0' }}>{language ? 'About me' : 'Acerca de mi'}</h2>
      <div ref={Card} onMouseMove={e => tiltEffect(e)} onMouseOut={disableAnimation} data-aos="flip-left" className='card_personal'>
        <div>
          <img className='card_image' src={image} alt="" />
          <p style={{ color: 'rgb(58, 54, 54)', textAlign: 'center' }}>{language ? 'Hi , my name is Luis .Im a industrial engineer , interested in the finantial markets and development webs , Im 24 years old , Im a resilient and displined person ,willing and focused on fulfilling all the objectives that proposed to me.' : 'Hola mi nombre es Luis.Soy Ingeniero Industrial interesado en los mercados financieros y en el desarrollo web , Tengo 24 años , me considero una persona resiliente y diciplinada , siempre enfocado en lograr todas las metas que me proponga'}
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }} className='card_education' >
          <p>{language ? 'Education' : 'Eduación'}</p>
          <div>
            <p style={{ color: 'gray' }}>{language ? '2022-Currently' : '2022-Actualidad'}</p>
            <p>{language ? 'Full-stack Developer student at Academlo' : 'Estudiante de desarrollo Full-stack en Academlo'}</p>
          </div>
          <div>
            <p style={{ color: 'gray' }}>2015-2021</p>
            <p>{language ? 'Graduated from the Industrial Engineering career at the University of Lima' : 'Graduado de la carrera de Ingeniería Industrial en la Universidad de Lima'}</p>
          </div>
          <div className='card_buttons_download'>
            <div className='card_box_download'>
              <button className='button_download'><a style={{ color: 'white', textDecoration: 'none' }} href={CV} download>{language ? 'Download CV' : 'Descargar CV'}</a></button>
              <button className='button_download_2'><a style={{ color: 'white' }} href={CV} download><BsDownload style={{ transform: 'scale(1.4)' }} /></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe