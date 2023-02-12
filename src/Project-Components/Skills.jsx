import React from 'react'
import { skills } from '../Projects.jsx'


const Skills = ({ language, dark }) => {

  return (
    <div className={dark ? 'card_skills' : 'card_skillsLight'} style={{ transition: 'all 500ms ease' }} id='skills'>
      <div data-aos="zoom-in-up"
        className='text_skills' style={{ color: dark ? 'white' : 'black', textAlign: 'center' }}>
        <h2>{language ? 'Skills' : 'Habilidades'}</h2> <hr />
        <p style={{ color: dark ? 'white' : 'black' }}>{language ? 'These are my abilities learned in Academlo , I took courses in Udemy too , to complement my skills.' : 'Estas son mis habilidades aprendidas en Academlo,así mismo tomé cursos en Udemy para complementarlas. '}</p>
      </div>
      <div className='box_skills' data-aos="fade-up" >
        <div className='box_skill'  >
          {skills.map(skill => <figure key={skill.id} className='figure_skill'>{skill.image}</figure>)}
        </div>
      </div>
    </div>
  )
}

export default Skills