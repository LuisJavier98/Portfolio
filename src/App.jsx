import './App.css'
import video from '../src/Video/Smoke.mp4'
import { useRef, useState, useEffect, useCallback } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { loadFull } from 'tsparticles'
import options from './React-animation/options'
import videoLight from './Video/videoLight.mp4'
import AboutMe from './Project-Components/AboutMe'
import Skills from './Project-Components/Skills'
import Home from './Project-Components/Home'
import MyProject from './Project-Components/MyProject'
import Header from './Project-Components/Header'
import Footer from './Project-Components/Footer';
import { BsMoon, BsSun } from 'react-icons/bs'
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai'
console.log(window)


function App() {

  AOS.init({
    mirror: false,
    offset: 0,
    easing: 'ease',
  });


  const [projectNumber, setprojectNumber] = useState(0)
  const [render, setrender] = useState()
  const [dark, setdark] = useState(true)
  const [isActive, setisActive] = useState(false)
  const [language, setlanguage] = useState(true)
  const [deploy, setdeploy] = useState(false)
  const ProjectMove = useRef()
  let height = window.innerHeight
  const headers = useRef()
  const Reference = useRef()


  const handleDeploy = () => {
    setdeploy(!deploy)
  }
  const handleDark = () => {
    setdark(!dark)
  }

  window.onscroll = function () {
    if (dark) {
      if (scrollY > (height - 10)) {
        headers.current.style.backgroundColor = '#181818'
        headers.current.style.backdropFilter = 'blur(0px)'
        Reference.current.style.backgroundColor = '#181818'
        Reference.current.style.backdropFilter = 'blur(0px)'
      }
      else {
        headers.current.style.backdropFilter = 'blur(20px)'
        headers.current.style.backgroundColor = 'transparent'
        Reference.current.style.backdropFilter = 'blur(20px)'
        Reference.current.style.backgroundColor = 'transparent'
      }
    }
    else {
      if (scrollY > (height - 10)) {
        headers.current.style.backgroundColor = 'rgba(219, 228, 237, 255)'
        headers.current.style.backdropFilter = 'blur(0px)'
        Reference.current.style.backgroundColor = 'rgba(219, 228, 237, 255)'
        Reference.current.style.backdropFilter = 'blur(0px)'
      }
      else {
        headers.current.style.backdropFilter = 'blur(20px)'
        headers.current.style.backgroundColor = 'transparent'
        Reference.current.style.backdropFilter = 'blur(20px)'
        Reference.current.style.backgroundColor = 'transparent'
      }

    }
  }

  const buttonDark = document.getElementsByClassName('button_dark')
  const buttonLanguage = document.getElementsByClassName('button_language')
  const buttonWhatsapp = document.getElementsByClassName('button_whatsapp')

  const handleChange = () => {
    setisActive(!isActive)
  }

  const handleLanguage = () => {
    setlanguage(!language)
  }

  const SelectCard = useRef()

  const ProjectNext = e => {
    e.preventDefault()
    setprojectNumber(Number(e.target.id))
    setrender(e.target.id)
  }

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  let Childs
  useEffect(() => {
    ProjectMove.current.style.transform = `translateX(${-25 * projectNumber}%)`
    ProjectMove.current.style.transition = 'all 250ms ease'
    Childs = SelectCard.current.childNodes[0]
    if (deploy) {
      buttonDark[0].style.transform = 'translateX(50px)'
      buttonDark[0].style.transition = 'all 250ms ease'
      buttonLanguage[0].style.transition = 'all 250ms ease'
      buttonLanguage[0].style.transform = 'translate(50px, -50px)'
      buttonWhatsapp[0].style.transform = 'translateY(-50px)'
      buttonWhatsapp[0].style.transition = 'all 250ms ease'
    }
    else {
      buttonDark[0].style.transform = 'translateX(0px)'
      buttonDark[0].style.transition = 'all 250ms ease'
      buttonLanguage[0].style.transform = 'translateX(0px)'
      buttonLanguage[0].style.transition = 'all 250ms ease'
      buttonWhatsapp[0].style.transform = 'translateY(0px)'
      buttonWhatsapp[0].style.transition = 'all 250ms ease'
    }
  }
    , [render, isActive, language, dark, deploy])

  const ElementS = (altitude, i) => {
    Childs.childNodes[i].childNodes[1].style.height = `${altitude}%`

  }


  return (
    <div className="App" >
      <button className='button_language' onClick={handleLanguage}></button>
      <button style={{ backgroundColor: dark ? 'rgb(221, 215, 215)' : 'rgb(62, 59, 59)', color: dark ? 'black' : 'white' }} className='button_dark' onClick={handleDark}>{dark ? <BsSun /> : <BsMoon />}</button>
      <a href="https://api.whatsapp.com/send?phone=51957580094&text=Hola, Nececito mas informacion!" target='_blank'>
        <button className='button_whatsapp' style={{ backgroundImage: 'url(https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360)' }} >
        </button>
      </a>
      <button className='button_config' onClick={handleDeploy} style={{ translate: 'all 500ms ease', backgroundColor: dark ? '#181818' : 'rgba(219, 228, 237, 255)', color: dark ? 'white' : 'black' }}> {deploy ? <AiOutlineClose /> : <AiOutlineSetting />}</button>
      {
        dark ?
          <video style={{ transition: 'all 250ms ease' }} src={video} autoPlay muted loop></video>
          :
          <video style={{ transition: 'all 250ms ease' }} src={videoLight} autoPlay muted loop></video>
      }
      <Header
        language={language}
        isActive={isActive}
        handleChange={handleChange}
        headers={headers}
        dark={dark}
      />

      <Home
        language={language}
        handleChange={handleChange}
        height={height}
        Reference={Reference}
        dark={dark}
      />

      <AboutMe
        language={language}
        dark={dark} />

      <Skills
        language={language}
        dark={dark} />

      <MyProject
        language={language}
        ProjectMove={ProjectMove}
        ProjectNext={ProjectNext}
        SelectCard={SelectCard}
        projectNumber={projectNumber}
        ElementS={ElementS}
        dark={dark}
      />
      <Footer
        language={language}
        dark={dark}
      />


    </div >
  )
}

export default App
//en serio?
