import React, { useRef } from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { AiOutlineLinkedin, AiOutlineCopyright } from 'react-icons/ai'
import useTranslationFile, { fetchTranslations } from '../../Hook/useTranslationFile'
import i18next from 'i18next'
import { disableAnimation, tiltEffect } from '../../Config/Effects'
const files = import.meta.glob('./Translations/**/*.json')
const resource = fetchTranslations(files, 'Footer')
const Footer = ({ dark }) => {
  const año = new Date
  const Footer = useRef()
  const { t } = useTranslationFile(resource, 'Footer')

  return (
    <footer style={{ background: dark ? ' linear-gradient(to top, #181818, rgb(87, 82, 82))' : 'linear-gradient(to top, rgba(219, 228, 237, 255), rgb(87, 82, 82))' }} className='card_contactMe' id='CONTACT_ME'>
      <h2 className='card_contact' style={{ color: dark ? 'white' : 'black' }}> {t('TITLE')}</h2>
      <form ref={Footer} onMouseMove={(e) => tiltEffect(e, Footer)} onMouseOut={() => disableAnimation(Footer)} data-aos="flip-up" data-aos-duration="500" action='https://formsubmit.co/luisjavier_2705@hotmail.com' method='POST' className='card_info'>
        <label htmlFor=""><p>{t('NAME')}</p></label>
        <input type='text' pattern='[a-zA-Z]+' title={t('VALIDATION', { name: i18next.language == 'en' ? 'name' : 'nombre' })} name='first_name' required autoComplete='off' />
        <label htmlFor=""><p>{t('LAST_NAME')}</p></label>
        <input type="text" pattern='[a-zA-Z]+' title={t('VALIDATION', { name: i18next.language == 'en' ? 'last name' : 'apellido' })} name='last_name' required autoComplete='off' />
        <label htmlFor=""><p> {t('EMAIL')}</p></label>
        <input type="email" name='email' required autoComplete='off' />
        <label htmlFor="number"> <p>{t('NUMBER')}</p></label>
        <input type="text" pattern='[0-9]{9}' name='number' required autoComplete='off' />
        <label htmlFor=""><p>{t('MESSAGE')}</p></label>
        <textarea name="message" id="" cols="30" rows="10" required ></textarea>
        <button type='submit' className='button_send'>{t("SEND")}</button>
      </form>

      <div style={{ backgroundColor: dark ? '' : 'rgb(87, 82, 82)' }} className='card_icons'>
        <a href="https://www.linkedin.com/in/luis-javier-burga-campos-97bb77186/" target={'_blank'}><AiOutlineLinkedin /></a>
        <a href="https://github.com/LuisJavier98" target={'_blank'}><BsGithub /></a>
        <a href="https://www.instagram.com/luisjavier.98/" target={'_blank'}><BsInstagram /></a>
      </div>
      <blockquote style={{ margin: '0px', textAlign: 'center', color: 'white', backgroundColor: dark ? '' : 'rgb(87, 82, 82)' }}><AiOutlineCopyright /> Copyright {año.getFullYear()}</blockquote>

    </footer>
  )
}

export default Footer