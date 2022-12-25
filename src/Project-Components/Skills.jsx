import React from 'react'
import { skills } from '../Projects'
import {useSelector } from 'react-redux'

const Skills = ({ language }) => {
  const dark = useSelector(state => state.changeColor)
  return (
    <div className={dark?'card_skills':'card_skillsLight'} id='skills'>
      <div data-aos="zoom-in-up"
        className='text_skills' style={{ color: 'white', textAlign: 'center' }}>
        <h2>{language ? 'Skills' : 'Habilidades'}</h2> <hr />
        <p style={{ color: 'white' }}>{language ? 'These are my abilities learned in Academlo , I took courses in Udemy too , to complement my skills.' : 'Estas son mis habilidades aprendidas en Academlo,así mismo tomé cursos en Udemy para complementarlas. '}</p>
      </div>
      <div className='box_skills' data-aos="fade-up" >
        <div className='box_skill'  >
          {skills.map(skill => <figure><img className='skill' src={skill} alt={skill} /></figure>)}
        </div>
      </div>
    </div>
  )
}

export default Skills