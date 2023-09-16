import React from 'react'
import Typewriter from 'typewriter-effect'
import useTranslationFile, { fetchTranslations } from '../../Hook/useTranslationFile'
const files = import.meta.glob('./Translations/**/*.json')
const resource = fetchTranslations(files, 'Home')

const Home = ({ handleChange, Reference, dark, isActive }) => {
  const { t } = useTranslationFile(resource, 'Home')

  return (
    <div className='card_home' id='HOME'>
      <div ref={Reference} style={{ backgroundColor: dark ? 'rgb(0,0,0,0.9)' : 'rgba(219, 228, 237,0.9)', borderTop: '1px solid white' }} className='card_contain_button'>
        <button style={{ color: dark ? 'white' : "black" }} onClick={handleChange}><div className={isActive ? 'menu_close' : 'menu'}></div></button>
      </div>
      <h1 style={{ color: dark ? 'white' : 'black', transition: 'all 500ms ease' }}>Luis Javier</h1>
      <p style={{ color: dark ? 'white' : 'black', textAlign: 'center', transition: 'all 500ms ease' }}>
        <Typewriter
          options={{
            strings: [t('WEB'), t('FOREX'), t('INDUSTRIAL')],
            autoStart: true,
            loop: true,
            delay: 50,
            pauseFor: 1000,
          }}
        />
      </p>
    </div>
  )
}

export default Home