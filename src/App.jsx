import './App.css'
import video from '../src/Video/Smoke.mp4'
import image from '../src/Images/Foto.png'
import { BsInstagram } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineCopyright } from 'react-icons/ai'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Projects from '../src/Pojects'


function App() {

  const [projectNumber, setprojectNumber] = useState(0)
  const [render, setrender] = useState()

  const ProjectMove = useRef()
  const SelectCard = useRef()



  const ProjectNext = e => {
    e.preventDefault()
    setprojectNumber(e.target.id)
    setrender(e.target.id)
  }


  let Childs

  useEffect(() => {
    ProjectMove.current.style.transform = `translateX(${-25 * projectNumber}%)`
    ProjectMove.current.style.transition = 'all 1s ease'
    Childs = SelectCard.current.childNodes[0]
  }, [render])



  const ElementS = (altitude, i) => {
    Childs.childNodes[i].childNodes[1].style.height = `${altitude}%`
  }


  return (
    <div className="App">
      <video src={video} autoPlay muted loop></video>
      <header className='card_header'>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutMe">About me </a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contactMe">Contact me</a>
        </li>
      </header>
      <div className='card_home' id='home'>
        <img src={image} alt="myface" />
        <h1 style={{ color: 'white' }}>Luis Javier</h1>
        <p style={{ color: 'white', textAlign: 'center' }}>I'm a insutrial engineering but now interested in web developer</p>
      </div>
      <div className='card_aboutMe' id='aboutMe' >
        <h2 style={{ color: 'white', textAlign: 'center', margin: '0' }}>About me</h2>
        <div className='card_personal'>
          <div>
            <img className='card_image' src={image} alt="" />
            <p style={{ color: 'rgb(58, 54, 54)', textAlign: 'center' }}>Hi , my name is Luis .I'm a industrial engineering , interested in the finantial markets and development webs , I'm 24 years old , I'm a resilient and displined person ,willing and focused on fulfilling all the objectives that proposed to me.
            </p>
          </div>
          <div className='card_education' >
            <p>Education</p>
            <div>
              <p style={{ color: 'gray' }}>2022-Currently</p>
              <p>Full-stack Developer student at Academlo</p>
            </div>
            <div>
              <p style={{ color: 'gray' }}>2015-2021</p>
              <p>Graduated from the Industrial Engineering career at the University of Lima</p>
            </div>
          </div>
        </div>

      </div>

      <div className='card_skills' id='skills'>
        <h2 className='text_skills' style={{ color: 'white' }}>Skills</h2>
        <div className='box_skills'>
            <div className='box_skill'  >
              <img className='skill' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="" />
              <img className='skill' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
              <img className='skill' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
              <img className='skill' src="https://www.gran-turismo.com/gtsport/decal/5125114039554278920_1.png" alt="" />
              <img className='skill' src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="" />
              <img className='skill' src="https://camo.githubusercontent.com/bf86933b5abaf817383aa87cf640bb80d41b314ea1509385e7e52433f0aee4c6/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3531322f312a395531746f6572467842386169465272654c784555512e706e67" alt="" />
              <img className='skill' src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
            </div>
        </div>
      </div>
      <div className='card_projects' id='projects'>
        <h2 className='text_project' style={{ textAlign: 'center', color: 'white' }}>Projects</h2>
        <div className='card_contain_projects'>
          <div ref={SelectCard} className='card_contain' >
            <div ref={ProjectMove}
              className='projects'>
              {Projects.map((project, indice) => <div onMouseOver={() => ElementS(100, indice)} onMouseOut={() => ElementS(0, indice)} className=' project'>
                <img  id={indice} src={project} alt="" />
                <div className='card_subida'></div>
              </div>)}
            </div>
          </div>
          <div className='card_contain_buttonProject'>
            {Projects.map((project, indice) => <button className={indice == projectNumber ? "buttonProjectActive" : "buttonProjectInactive"} onClick={ProjectNext} id={indice}></button>)}
          </div>
        </div>
      </div>
      <footer className='card_contactMe' id='contactMe'>
        <div>
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
