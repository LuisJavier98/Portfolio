import './App.css'
import video from '../static/Video/Smoke.mp4'
import React, { useRef, useState, useEffect, Suspense, lazy } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import videoLight from '../static/Video/videoLight.mp4'
import Header from './Components/Header/Header';
import AboutMe from './Components/About/AboutMe';
import Skills from './Components/Skills/Skills';
import Home from './Components/Home/Home';
import MyProject from './Components/Project/MyProject';
import Footer from './Components/Footer/Footer'
import Loading from './Components/Loading/Loading';

// const AboutMe = lazy(() => import('./Components/About/AboutMe'))
// const Skills = lazy(() => import('./Components/Skills/Skills'))
// const Home = lazy(() => import('./Components/Home/Home'))
// const MyProject = lazy(() => import('./Components/Project/MyProject'))
// const Footer = lazy(() => import('./Components/Footer/Footer'))
// const Header = lazy(() => import("./Components/Header/Header"));

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
  const headers = useRef()
  const Reference = useRef()



  const handleDark = () => {
    setdark(!dark)
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

  return (
    // <Suspense fallback={<div>...LOADING</div>}>
    <div className="App" >
      {
        dark ?
          <video poster='static/Images/poster.jpg' src={video} muted autoPlay loop ></video>
          :
          <video  src={videoLight} muted autoPlay loop ></video>
      }
      <Suspense fallback={<Loading/>}>
        <Header
          isActive={isActive}
          handleChange={handleChange}
          headers={headers}
          dark={dark}
          handleDark={handleDark}
        />
        <Home
          handleChange={handleChange}
          Reference={Reference}
          dark={dark}
          isActive={isActive}
        />
        <AboutMe
          dark={dark} />
        <Skills
          dark={dark} />
        <MyProject
          render={render}
          ProjectNext={ProjectNext}
          SelectCard={SelectCard}
          projectNumber={projectNumber}
          dark={dark}
        />
        <Footer
          dark={dark}
        />
      </Suspense >
    </div >
    // </Suspense>
  )
}

export default App

