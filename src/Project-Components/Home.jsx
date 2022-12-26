import React from 'react'
import { optionEnglish } from '../React-animation/options'
import { optionSpanish } from '../React-animation/options'
import { AiOutlineMenu } from 'react-icons/ai'
import Typewriter from 'typewriter-effect'


const Home = ({ language, handleChange, Reference,dark }) => {
  

  return (
    <div className='card_home' id='home'>
      <div ref={Reference} className='card_contain_button'>
        <button onClick={handleChange}><AiOutlineMenu /></button>
      </div>
      <h1 style={{ color: dark ? 'white' : 'black' }}>Luis Javier</h1>
      <p style={{ color: 'white', textAlign: 'center' }}><Typewriter 
        options={language ? optionEnglish : optionSpanish}
      /> </p>
    </div>
  )
}

export default Home