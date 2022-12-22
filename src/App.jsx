import './App.css'
import video from '../src/Video/Smoke.mp4'
import image from '../src/Images/Foto.png'
import CV from '../src/CV/CV_Luis_Burga.pdf'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineCopyright } from 'react-icons/ai'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Projects from '../src/Pojects'
import { skills } from '../src/Pojects'
import { AiOutlineMenu } from 'react-icons/ai'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { BsDownload } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import AOS from 'aos';
import 'aos/dist/aos.css'


function App() {
  const [projectNumber, setprojectNumber] = useState(0)
  const [render, setrender] = useState()
  const [isActive, setisActive] = useState(false)
  const handleChange = () => setisActive(!isActive)
  const ProjectMove = useRef()
  const SelectCard = useRef()
  const Reference = useRef()
  const Header = useRef()

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
    offset: 200,
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
    , [render])

  const ElementS = (altitude, i) => {
    Childs.childNodes[i].childNodes[1].style.height = `${altitude}%`

  }

  return (
    <div className="App">
      <video src={video} autoPlay muted loop></video>
      <header ref={Header} className={isActive ? 'card_header' : 'card_header_inactive'}>
        <li onClick={handleChange} className='card_close' style={{ color: 'white' }}>
          <IoIosCloseCircleOutline />
        </li>
        <li>
          <a onClick={handleChange} href="#home">Home</a>
        </li>
        <li>
          <a onClick={handleChange} href="#aboutMe">About me </a>
        </li>
        <li>
          <a onClick={handleChange} href="#skills">Skills</a>
        </li>
        <li>
          <a onClick={handleChange} href="#projects">Projects</a>
        </li>
        <li>
          <a onClick={handleChange} href="#contactMe">Contact me</a>
        </li>
      </header>
      <div className='card_home' id='home'>
        <div ref={Reference} className='card_contain_button'>
          <button onClick={handleChange}><AiOutlineMenu /></button>
        </div>
        <h1 style={{ color: 'white' }}>Luis Javier</h1>
        <p style={{ color: 'white', textAlign: 'center' }}><Typewriter
          options={{
            strings: ['Web developer', 'Forex Trader', 'Industrial Engineer'],
            autoStart: true,
            loop: true,
            delay: 50,
            pauseFor: 1000
          }}

        /> </p>
      </div>
      <div className='card_aboutMe' id='aboutMe' >
        <h2 style={{ color: 'white', textAlign: 'center', margin: '0' }}>About me</h2>
        <div id='particles-js' data-aos="flip-left" data-aos-duration="2000" data-aos-once="false" data-aos-mirror="true" className='card_personal'>
          <div>
            <img className='card_image' src={image} alt="" />
            <p style={{ color: 'rgb(58, 54, 54)', textAlign: 'center' }}>Hi , my name is Luis .I'm a industrial engineer , interested in the finantial markets and development webs , I'm 24 years old , I'm a resilient and displined person ,willing and focused on fulfilling all the objectives that proposed to me.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }} className='card_education' >
            <p>Education</p>
            <div>
              <p style={{ color: 'gray' }}>2022-Currently</p>
              <p>Full-stack Developer student at Academlo</p>
            </div>
            <div>
              <p style={{ color: 'gray' }}>2015-2021</p>
              <p>Graduated from the Industrial Engineering career at the University of Lima</p>
            </div>
            <div className='card_buttons_download'>
              <div className='card_box_download'>
                <button className='button_download'><a style={{ color: 'white', textDecoration: 'none' }} href={CV} download>Download CV</a></button>
                <button className='button_download_2'><a style={{ color: 'white' }} href={CV} download><BsDownload style={{ transform: 'scale(1.4)' }} /></a></button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='card_skills' id='skills'>
        <div data-aos="zoom-in-up" data-aos-duration="2000"
          className='text_skills' style={{ color: 'white', textAlign: 'center' }}>
          <h2>Skills</h2> <hr />
          <p style={{ color: 'white' }}>These are my abilities learned in Academlo in my first period , I took courses in Udemy too , to complement my skills</p>
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
                      <p style={{ color: 'red' }}>Web page focus on searching pokemons by type and name </p>
                      <div style={{ display: 'flex', gap: '8%' }}>
                        <a href="https://fluffy-tarsier-d169ec.netlify.app/#/pokedex" target={'_blank'}><button>Demo</button></a>
                        <a href="https://github.com/LuisJavier98/Pokedex" target={'_blank'}> <button>Code</button></a>
                      </div>
                    </div>
                    : indice == 1 ?
                      <div className='card_subida'>
                        <h2 style={{ textAlign: 'center' }} >E-commerce</h2>
                        <p style={{ color: 'red' }}></p>
                        <div style={{ display: 'flex', gap: '8%' }}>
                          <a href="https://jade-caramel-402266.netlify.app" target={'_blank'}><button>Demo</button></a>
                          <a href="https://github.com/LuisJavier98/Entregable-6" target={'_blank'}><button>Code</button></a>
                        </div>
                      </div>
                      : indice == 2 ?
                        <div className='card_subida'>
                          <h2 style={{ textAlign: 'center' }} >Rick and Morty Api</h2>
                          <p style={{ color: 'red' }}></p>
                          <div style={{ display: 'flex', gap: '8%' }}>
                            <a href="https://harmonious-puffpuff-fe0efd.netlify.app" target={'_blank'}><button>Demo</button></a>
                            <a href="https://github.com/LuisJavier98/Entregable-3" target={'_blank'}><button>Code</button></a>
                          </div>
                        </div>
                        : <div className='card_subida'>
                          <h2 style={{ textAlign: 'center' }} >Weather Api</h2>
                          <p style={{ color: 'red' }}></p>
                          <div style={{ display: 'flex', gap: '8%' }}>
                            <a href="https://golden-licorice-3c5c45.netlify.app" target={'_blank'}><button>Demo</button></a>
                            <a href="https://github.com/LuisJavier98/Segundo-entrgable" target={'_blank'}><button>Code</button></a>
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
        <div className='text_project' data-aos="zoom-in-up" data-aos-duration="2000" style={{ textAlign: 'center', color: 'white' }}><h2>Projects</h2><hr /> <p style={{ color: 'white' }}>These are 4 of my projects front end developed in Academlo
        </p>
        </div>
      </div>
      <footer className='card_contactMe' id='contactMe'>
        <form action='https://formsubmit.co/luisjavier_2705@hotmail.com' method='POST' className='card_info'>
          <h2> Contact Me</h2>
          <label htmlFor="">First Name</label>
          <input type="text" name='first_name' required autoComplete='off' />
          <label htmlFor="">Last Name</label>
          <input type="text" name='last_name' required autoComplete='off'/>
          <label htmlFor="">Email</label>
          <input type="email" name='email' required autoComplete='off' />
          <label htmlFor="number">Phone Number</label>
          <input type="number" name='number' required autoComplete='off' />
          <label htmlFor="">Message</label>
          <textarea name="message" id="" cols="30" rows="10" required ></textarea>
          <button type='submit' className='button_send'>Send</button>


        </form>
        <div className='card_icons'>
          <a href="https://www.linkedin.com/in/luis-javier-burga-campos-97bb77186/" target={'_blank'}><AiOutlineLinkedin /></a>
          <a href="https://github.com/LuisJavier98" target={'_blank'}><BsGithub /></a>
          <a href="https://www.instagram.com/luisjavier.98/" target={'_blank'}><BsInstagram /></a>
        </div>
        <blockquote style={{ margin: '0px', textAlign: 'center', color: 'white' }}><AiOutlineCopyright /> Copyright 2022</blockquote>
      </footer>
    </div>
  )
}

export default App
