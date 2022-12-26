import React from 'react'
import CV from '../CV/CV_Luis_Burga.pdf'
import { BsDownload } from 'react-icons/bs'
import image from '../Images/Foto.png'



const AboutMe = ({ language,dark }) => {

  return (
    <div className={dark?'card_aboutMe':'card_aboutMeLight'} id='aboutMe' >
      <h2 style={{ color:dark? 'white':'black', textAlign: 'center', margin: '0' }}>{language ? 'About me' : 'Acerca de mi'}</h2>
      <div data-aos="flip-left" className='card_personal'>
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