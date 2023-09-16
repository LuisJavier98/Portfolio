import React, { useEffect, useRef } from 'react'
import Projects, { Etiquetas } from './Component/Projects'
import useTranslationFile, { fetchTranslations } from '../../Hook/useTranslationFile'
const files = import.meta.glob('./Translations/**/*.json')
const resource = fetchTranslations(files, 'MyProjects')

const MyProject = ({ render, ProjectNext, SelectCard, projectNumber, dark }) => {


  const { t } = useTranslationFile(resource, 'MyProjects')
  const ProjectMove = useRef()


  const ElementS = (altitude, i) => {
    let Childs = SelectCard.current.childNodes[0]
    Childs.childNodes[i].childNodes[1].style.height = `${altitude}%`
  }

  useEffect(() => {
    ProjectMove.current.style.transform = `translateX(${-(100 / 8) * projectNumber}%)`
    ProjectMove.current.style.transition = 'all 250ms ease'
  }, [render])


  return (
    <div className={dark ? 'card_projects' : 'card_projectsLight'} id='PROJECTS'>
      <div data-aos="fade-up" className='card_contain_projects'>
        <div ref={SelectCard} className='card_contain' >
          <div ref={ProjectMove}
            className='projects'>
            {Projects.map((project, indice) => (
              <div key={indice} onMouseOver={() => ElementS(100, indice)} onMouseOut={() => { ElementS(0, indice) }} className=' project'>
                <img loading='lazy' id={indice} src={project} alt="" />
                {Etiquetas(indice)}
              </div>
            ))}
          </div>
        </div>
        <div className='card_contain_buttonProject'>
          {Projects.map((project, indice) => <button key={indice} className={indice == projectNumber ? "buttonProjectActive" : "buttonProjectInactive"} onClick={ProjectNext} id={indice}></button>)}
        </div>
      </div>
      <div className='text_project' data-aos="zoom-in-up" style={{ textAlign: 'center', color: dark ? 'white' : 'black' }}><h2>{t('TITLE')}</h2><hr /> <p style={{ color: dark ? 'white' : 'black' }}>{t('CONTENT')}
      </p>
      </div>
    </div>
  )
}

export default MyProject