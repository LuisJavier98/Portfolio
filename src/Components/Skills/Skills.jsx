import React from 'react'
import { skills } from '../Project/Component/Projects'
import { useTranslation } from 'react-i18next'
import useTranslationFile, { fetchTranslations } from '../../Hook/useTranslationFile'
const files = import.meta.glob('./Translations/**/*.json')
const resource = fetchTranslations(files, 'Skills')


const Skills = ({ dark }) => {
  const { t } = useTranslationFile(resource, 'Skills')
  return (
    <div className={dark ? 'card_skills' : 'card_skillsLight'} style={{ transition: 'all 500ms ease' }} id='SKILLS'>
      <div data-aos="zoom-in-up"
        className='text_skills' style={{ color: dark ? 'white' : 'black', textAlign: 'center' }}>
        <h2>{t('TITLE')}</h2> <hr />
        <p style={{ color: dark ? 'white' : 'black' }}>{t('SKILLS')}</p>
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