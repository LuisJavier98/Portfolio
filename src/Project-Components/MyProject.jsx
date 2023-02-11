import React from 'react'
import Projects, { Etiquetas } from '../Projects.jsx'


const MyProject = ({ language, ProjectMove, ProjectNext, SelectCard, projectNumber, ElementS, dark }) => {
  return (
    <div className={dark ? 'card_projects' : 'card_projectsLight'} id='projects'>
      <div data-aos="fade-up" className='card_contain_projects'>
        <div ref={SelectCard} className='card_contain' >
          <div ref={ProjectMove}
            className='projects'>
            {Projects.map((project, indice) => (
              <div key={indice} onMouseOver={() => ElementS(100, indice)} onMouseOut={() => { ElementS(0, indice) }} className=' project'>
                <img id={indice} src={project} alt="" />
                {Etiquetas(language, indice)}
              </div>
            ))}
          </div>
        </div>
        <div className='card_contain_buttonProject'>
          {Projects.map((project, indice) => <button className={indice == projectNumber ? "buttonProjectActive" : "buttonProjectInactive"} onClick={ProjectNext} id={indice}></button>)}
        </div>
      </div>
      <div className='text_project' data-aos="zoom-in-up" style={{ textAlign: 'center', color: dark ? 'white' : 'black' }}><h2>{language ? 'Projects' : 'Proyectos'}</h2><hr /> <p style={{ color: dark ? 'white' : 'black' }}>{language ? 'These are 4 of my projects front end developed in Academlo' : 'Estos son 4 de mis proyectos desarrollados en Academlo'}
      </p>
      </div>
    </div>
  )
}

export default MyProject