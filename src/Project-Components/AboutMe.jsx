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
    Card.current.style.transform = `perspective(2700px) translate3d(0,0,50px) rotateX(${-perspectiveY / 45}deg) rotateY(${perspectiveX / 45}deg) `
  }
  const disableAnimation = () => {
    Card.current.style.transform = ''
    Card.current.style.transitionTimingFunction = ''
    Card.current.style.transitionDuration = ''
  }

  return (
    <div className={dark ? 'card_aboutMe' : 'card_aboutMeLight'} id='aboutMe' >
      <h2 style={{ flex: 1, color: dark ? 'white' : 'black', textAlign: 'center', margin: '0' }}>{language ? 'About me' : 'Acerca de mi'}</h2>
      <div ref={Card} onMouseMove={e => tiltEffect(e)} onMouseOut={disableAnimation} data-aos="flip-left" className='card_personal'>
        <div className='card_imageInformation' >
          <img className='card_image' src={image} alt="" />
          <p style={{ color: 'rgb(58, 54, 54)', textAlign: 'center' }}>{language ? 'I present myself as a highly disciplined and persevering person in the fulfillment of my goals and objectives. My dedication and commitment are the pillars of my work and I strive to always achieve excellence in everything I do. In addition, I am an individual who is characterized by having a fast learning and a great ability to adapt to new situations and technologies.' : 'Me presento como una persona altamente disciplinada y perseverante en el cumplimiento de mis metas y objetivos. Mi dedicación y compromiso son los pilares de mi trabajo y me esfuerzo por alcanzar siempre la excelencia en todo lo que hago. Además, soy un individuo que se caracteriza por tener un aprendizaje rápido y una gran capacidad de adaptación a nuevas situaciones y tecnologías.'}
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }} className='card_education' >
          <p>{language ? 'Education' : 'Eduación'}</p>
          <div>
            <p style={{ color: 'gray' }}>{language ? 'Aug 2022- Dec 2022' : 'Ago 2022-Dic 2022'}</p>
            <p>{language ? 'Full-stack Developer graduated from Academlo' : 'Graduado como desarrollo Full-stack en Academlo'}</p>
          </div>
          <div>
            <p style={{ color: 'gray' }}>2015-2021</p>
            <p>{language ? 'Graduated from the Industrial Engineering career at the University of Lima' : 'Graduado de la carrera de Ingeniería Industrial en la Universidad de Lima'}</p>
          </div>
          <div className='card_buttons_download'>
            <div className='card_box_download'>
              <button className='button_download'><a style={{ color: 'white', textDecoration: 'none' }} href={CV} download> {language ? 'Download CV' : 'Descargar CV'}</a></button>
              <button className='button_download_2'><a style={{ color: 'white' }} href={CV} download><BsDownload style={{ transform: 'scale(1.4)' }} /></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe