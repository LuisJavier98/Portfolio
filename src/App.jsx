import './App.css'
import video from '../src/Video/Smoke.mp4'
import { useRef, useState, useEffect, useCallback } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import options from './React-animation/options'
import videoLight from './Video/videoLight.mp4'
import AboutMe from './Project-Components/AboutMe'
import Skills from './Project-Components/Skills'
import Home from './Project-Components/Home'
import MyProject from './Project-Components/MyProject'
import Header from './Project-Components/Header'
import Footer from './Project-Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Change } from './Store/Slices/Boolean.slice.js'
import { BsMoon, BsSun } from 'react-icons/bs'



function App() {

  AOS.init({
    mirror: false,
    offset: 0,
    easing: 'ease',
  });


  const [projectNumber, setprojectNumber] = useState(0)
  const [render, setrender] = useState()
  const [isActive, setisActive] = useState(false)
  const [language, setlanguage] = useState(true)
  const ProjectMove = useRef()
  let height = window.innerHeight
  const headers = useRef()
  const Reference = useRef()
  const dispatch = useDispatch()
  const dark = useSelector(state => state.changeColor)

  const handleDark = () => {
    dispatch(Change())
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
        headers.current.style.backgroundColor = 'rgb(87, 82, 82)'
        headers.current.style.backdropFilter = 'blur(0px)'
        Reference.current.style.backgroundColor = 'rgb(87, 82, 82)'
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
  }
    , [render, isActive, language, dark])

  const ElementS = (altitude, i) => {
    Childs.childNodes[i].childNodes[1].style.height = `${altitude}%`

  }



  return (
    <div className="App" >
      <button style={{ backgroundImage: language ? 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png) ' : "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/640px-Flag_of_the_United_Kingdom.svg.png)" }} className='button_language' onClick={handleLanguage}></button>
      <button style={{ backgroundColor: dark ? 'rgb(221, 215, 215)' : 'rgb(62, 59, 59)', color: dark ? 'black' : 'white' }} className='button_dark' onClick={handleDark}>{dark ? <BsSun /> : <BsMoon />}</button>
      {
        dark ?
          <video src={video} autoPlay muted loop></video>
          :
          <video src={videoLight} autoPlay muted loop></video>
      }
      <Header
        language={language}
        isActive={isActive}
        handleChange={handleChange}
        headers={headers}
      />

      <Home
        language={language}
        handleChange={handleChange}
        height={height}
        Reference={Reference}
      />

      <AboutMe
        language={language} />

      <Skills
        language={language} />

      <MyProject
        language={language}
        ProjectMove={ProjectMove}
        ProjectNext={ProjectNext}
        SelectCard={SelectCard}
        projectNumber={projectNumber}
        ElementS={ElementS}
      />
      <Footer
        language={language}
      />


    </div >
  )
}

export default App
