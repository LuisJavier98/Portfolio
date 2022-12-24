import './App.css'
import video from '../src/Video/Smoke.mp4'
import image from '../src/Images/Foto.png'
import CV from '../src/CV/CV_Luis_Burga.pdf'
import { BsGithub, BsDownload, BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineCopyright, AiOutlineMenu } from 'react-icons/ai'
import { useRef, useState, useEffect, useCallback } from 'react'
import Projects, { skills } from '../src/Pojects'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import Typewriter from 'typewriter-effect'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import options from './React-animation/options'
import { optionEnglish } from './React-animation/options'
import { optionSpanish } from './React-animation/options'

function App() {
  const [projectNumber, setprojectNumber] = useState(0)
  const [render, setrender] = useState()
  const [isActive, setisActive] = useState(false)
  const [language, setlanguage] = useState(true)
  const handleChange = () => setisActive(!isActive)
  const ProjectMove = useRef()
  const SelectCard = useRef()
  const Reference = useRef()
  const Header = useRef()

  const handleLanguage = () => {
    setlanguage(!language)
  }

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);


  let height = window.innerHeight
  window.onscroll = function () {
    if (scrollY > (height - 10)) {
      Header.current.style.backgroundColor = '#181818'
      Header.current.style.backdropFilter = 'blur(0px)'
      Reference.current.style.backgroundColor = '#181818'
      Reference.current.style.backdropFilter = 'blur(0px)'
    }
    else {
      Header.current.style.backdropFilter = 'blur(20px)'
      Header.current.style.backgroundColor = 'transparent'
      Reference.current.style.backdropFilter = 'blur(20px)'
      Reference.current.style.backgroundColor = 'transparent'
    }
  }

  AOS.init({
    mirror: false,
    offset: 50,
    easing: 'ease'
  });

  const ProjectNext = e => {
    e.preventDefault()
    setprojectNumber(Number(e.target.id))
    setrender(e.target.id)
  }

  let Childs

  useEffect(() => {
    ProjectMove.current.style.transform = `translateX(${-25 * projectNumber}%)`
    ProjectMove.current.style.transition = 'all 250ms ease'
    Childs = SelectCard.current.childNodes[0]
  }
    , [render, isActive, language])


  const ElementS = (altitude, i) => {
    Childs.childNodes[i].childNodes[1].style.height = `${altitude}%`

  }

  return (
    <div className="App" >
      <button className='button_language' onClick={handleLanguage}>{language ? 'ES' : 'ENG'}</button>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <video src={video} autoPlay muted loop></video>
      <header ref={Header} className={isActive ? 'card_header' : 'card_header_inactive'}>
        <li onClick={handleChange} className='card_close' style={{ color: 'white' }}>
          <IoIosCloseCircleOutline />
        </li>
        <li>
          <a onClick={handleChange} href="#home">{language ? 'Home' : 'Principal'}</a>
        </li>
        <li>
          <a onClick={handleChange} href="#aboutMe">{language ? 'About me' : 'Acerca de mi'} </a>
        </li>
        <li>
          <a onClick={handleChange} href="#skills">{language ? 'Skills' : 'Habilidades'}</a>
        </li>
        <li>
          <a onClick={handleChange} href="#projects">{language ? 'Projects' : 'Proyectos'}</a>
        </li>
        <li>
          <a onClick={handleChange} href="#contactMe">{language ? 'Contact me' : 'Contactame'}</a>
        </li>
      </header>
      <div className='card_home' id='home'>
        <div ref={Reference} className='card_contain_button'>
          <button onClick={handleChange}><AiOutlineMenu /></button>
        </div>
        <h1 style={{ color: 'white' }}>Luis Javier</h1>
        <p style={{ color: 'white', textAlign: 'center' }}><Typewriter
          options={language ? optionEnglish : optionSpanish}
        /> </p>
      </div>
      <div className='card_aboutMe' id='aboutMe' >
        <h2 style={{ color: 'white', textAlign: 'center', margin: '0' }}>{language ? 'About me' : 'Acerca de mi'}</h2>
        <div data-aos="flip-left" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true" className='card_personal'>
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

      <div className='card_skills' id='skills'>
        <div data-aos="zoom-in-up" data-aos-duration="2000"
          className='text_skills' style={{ color: 'white', textAlign: 'center' }}>
          <h2>{language ? 'Skills' : 'Habilidades'}</h2> <hr />
          <p style={{ color: 'white' }}>{language ? 'These are my abilities learned in Academlo , I took courses in Udemy too , to complement my skills.' : 'Estas son mis habilidades aprendidas en Academlo,así mismo tomé cursos en Udemy para complementarlas. '}</p>
        </div>
        <div className='box_skills' data-aos="fade-up" data-aos-duration="2000">
          <div className='box_skill'  >
            {skills.map(skill => <figure><img className='skill' src={skill} alt={skill} /></figure>)}
          </div>
        </div>
      </div>
      <div className='card_projects' id='projects'>
        <div data-aos="fade-up" data-aos-duration="2000" className='card_contain_projects'>
          <div ref={SelectCard} className='card_contain' >
            <div ref={ProjectMove}
              className='projects'>
              {Projects.map((project, indice) => <div onMouseOver={() => ElementS(100, indice)} onMouseOut={() => ElementS(0, indice)} className=' project'>
                <img id={indice} src={project} alt="" />
                {
                  indice == 0 ?
                    <div className='card_subida'>
                      <h2 style={{ textAlign: 'center' }} >Pokedex
                      </h2>
                      <p style={{ color: 'red' }}>{language ? 'Web page focus on searching pokemons by type and name , made with Html , CSS , React and the libraries Redux , Routes and Axios' : 'Pagina enfoacada en la busqueda de pokemones por tipo y nombre , desarrolada con Html,CSS,React y sus librerias Routes , Redux y Axios'}  </p>
                      <div style={{ display: 'flex', gap: '8%' }}>
                        <a href="https://fluffy-tarsier-d169ec.netlify.app/#/pokedex" target={'_blank'}><button>Demo</button></a>
                        <a href="https://github.com/LuisJavier98/Pokedex" target={'_blank'}> <button>{language ? 'Code' : 'Codigo'}</button></a>
                      </div>
                    </div>
                    : indice == 1 ?
                      <div className='card_subida'>
                        <h2 style={{ textAlign: 'center' }} >E-commerce</h2>
                        <p style={{ color: 'black' }}>{language ? 'Web focus on searching products and filtering by price and category , developed with Html , CSS , React and the libraries Redux , Routes , Hook form and Axios' : 'Web enfocada a la busqueda de productos de una tienda virtual con opcion a filtrarlo por categoria y precio , desarrollada con Html , CSS , React and the libraries Redux , Routes , Hook form and Axios'} </p>

                        <div style={{ display: 'flex', gap: '8%' }}>
                          <a href="https://jade-caramel-402266.netlify.app" target={'_blank'}><button>Demo</button></a>
                          <a href="https://github.com/LuisJavier98/Entregable-6" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
                        </div>
                      </div>
                      : indice == 2 ?
                        <div className='card_subida'>
                          <h2 style={{ textAlign: 'center', color: 'white' }} >Rick and Morty Api</h2>
                          <p style={{ color: 'white' }}>{language ? 'App focus on searching Rick and Mortys chapters made with Html,CSS, React and the libraries React Select and Axios' : 'Web enfocada en la busqueda de capitulos de la serie Rick and Morty, desarrollada con Html,CSS,React y las librerias React Select y Axios '}  </p>
                          <div style={{ display: 'flex', gap: '8%' }}>
                            <a href="https://harmonious-puffpuff-fe0efd.netlify.app" target={'_blank'}><button>Demo</button></a>
                            <a href="https://github.com/LuisJavier98/Entregable-3" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
                          </div>
                        </div>
                        : <div className='card_subida'>
                          <h2 style={{ textAlign: 'center' }} >Weather Api</h2>
                          <p style={{ color: 'red' }}>{
                            language ? 'Web focus on showing the dates about the weather in the countrey where was searching ,it was developed with Html,CSS , React and its library Axios' : 'Web enfocada en mostras los datos acerca del clima en el lugar donde es requerida , fue realizada con Html , CSS ,React y su libreria Axios'
                          }</p>
                          <div style={{ display: 'flex', gap: '8%' }}>
                            <a href="https://golden-licorice-3c5c45.netlify.app" target={'_blank'}><button>Demo</button></a>
                            <a href="https://github.com/LuisJavier98/Segundo-entrgable" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
                          </div>
                        </div>
                }
              </div>)}
            </div>
          </div>
          <div className='card_contain_buttonProject'>
            {Projects.map((project, indice) => <button className={indice == projectNumber ? "buttonProjectActive" : "buttonProjectInactive"} onClick={ProjectNext} id={indice}></button>)}
          </div>
        </div>
        <div className='text_project' data-aos="zoom-in-up" data-aos-duration="1000" style={{ textAlign: 'center', color: 'white' }}><h2>{language ? 'Projects' : 'Proyectos'}</h2><hr /> <p style={{ color: 'white' }}>{language ? 'These are 4 of my projects front end developed in Academlo' : 'Estos son 4 de mis proyectos desarrollados en Academlo'}
        </p>
        </div>
      </div>
      <footer className='card_contactMe' id='contactMe'>
        <h2 className='card_contact'> {language ? 'Contact Me' : 'Contactame'}</h2>
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
          <button type='submit' className='button_send'>{language ? 'Send' : 'Enviar'}</button>
        </form>
        <div className='card_icons'>
          <a href="https://www.linkedin.com/in/luis-javier-burga-campos-97bb77186/" target={'_blank'}><AiOutlineLinkedin /></a>
          <a href="https://github.com/LuisJavier98" target={'_blank'}><BsGithub /></a>
          <a href="https://www.instagram.com/luisjavier.98/" target={'_blank'}><BsInstagram /></a>
        </div>
        <blockquote style={{ margin: '0px', textAlign: 'center', color: 'white' }}><AiOutlineCopyright /> Copyright 2022</blockquote>
      </footer>
    </div >
  )
}

export default App
