import './App.css'
import video from '../src/Video/Smoke.mp4'
import { useRef, useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import videoLight from './Video/videoLight.mp4'
import AboutMe from './Project-Components/AboutMe'
import Skills from './Project-Components/Skills'
import Home from './Project-Components/Home'
import MyProject from './Project-Components/MyProject'
import Header from './Project-Components/Header'
import Footer from './Project-Components/Footer';

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
  const ProjectMove = useRef()
  const headers = useRef()
  const Reference = useRef()


  const handleDark = () => {
    setdark(!dark)
  }

  const handleLanguage = () => {
    setlanguage(!language)
  }
  const handleChange = () => {
    setisActive(!isActive)
  }

  const SelectCard = useRef()

  const ProjectNext = e => {
    e.preventDefault()
    setprojectNumber(Number(e.target.id))
    setrender(e.target.id)
  }


  useEffect(() => {
    ProjectMove.current.style.transform = `translateX(${-25 * projectNumber}%)`
    ProjectMove.current.style.transition = 'all 250ms ease'
  }
    , [render])


  const ElementS = (altitude, i) => {
    let Childs = SelectCard.current.childNodes[0]
    Childs.childNodes[i].childNodes[1].style.height = `${altitude}%`

  }


  return (
    <div className="App" >

      {
        dark ?
          <video src={video} muted autoPlay loop ></video>
          :
          <video src={videoLight} muted autoPlay loop ></video>
      }
      <Header
        language={language}
        isActive={isActive}
        handleChange={handleChange}
        headers={headers}
        dark={dark}
        handleDark={handleDark}
        handleLanguage={handleLanguage}

      />

      <Home
        language={language}
        handleChange={handleChange}
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
