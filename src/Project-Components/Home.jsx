import React from 'react'
import { optionEnglish } from '../React-animation/options'
import { optionSpanish } from '../React-animation/options'
import Typewriter from 'typewriter-effect'


const Home = ({ language, handleChange, Reference, dark, isActive }) => {


  return (
    <div className='card_home' id='home'>
      <div ref={Reference} style={{ backgroundColor: dark ? 'rgb(0,0,0,0.9)' : 'rgba(219, 228, 237,0.9)', borderTop: '1px solid white' }} className='card_contain_button'>
        <button style={{ color: dark ? 'white' : "black" }} onClick={handleChange}><div className={isActive ? 'menu_close' : 'menu'}></div></button>
      </div>
      <h1 style={{ color: dark ? 'white' : 'black', transition: 'all 500ms ease' }}>Luis Javier</h1>
      <p style={{ color: dark ? 'white' : 'black', textAlign: 'center', transition: 'all 500ms ease' }}>
        <Typewriter
          options={language ? optionEnglish : optionSpanish}
        />
      </p>
    </div>
  )
}

export default Home