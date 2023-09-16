import React, { useRef } from 'react'
import CV from './CV/CV_Luis_Burga.pdf'
import { BsDownload } from 'react-icons/bs'
import image from '../../../static/Images/Foto.png'
import useTranslationFile, { fetchTranslations } from '../../Hook/useTranslationFile'
import { tiltEffect, disableAnimation } from '../../Config/Effects'
const files = import.meta.glob('./Translations/**/*.json')
const resource = fetchTranslations(files, 'About')

const AboutMe = ({ language, dark }) => {
  const Card = useRef()
  const { t } = useTranslationFile(resource, 'About')

  return (
    <div className={dark ? 'card_aboutMe' : 'card_aboutMeLight'} id='ABOUT_ME' >
      <h2 style={{ flex: 1, color: dark ? 'white' : 'black', textAlign: 'center', margin: '0' }}>{language ? 'About me' : 'Acerca de mi'}</h2>
      <div ref={Card} onMouseMove={e => tiltEffect(e, Card)} onMouseOut={() => disableAnimation(Card)} data-aos="flip-left" className='card_personal'>
        <div className='card_imageInformation' >
          <img loading='lazy' className='card_image' src={image} alt="" />
          <p style={{ color: 'rgb(58, 54, 54)', textAlign: 'center' }}>{t('RESUME')}
          </p>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }} className='card_education' >
          <p>{t('EDUCATION')}</p>
          <div>
            <p style={{ color: 'gray' }}>{t("DATE")}</p>
            <p>{t("ACADEMLO")}</p>
          </div>
          <div>
            <p style={{ color: 'gray' }}>{t("DATEULIMA")}</p>
            <p>{t('ULIMA')}</p>
          </div>
          <div className='card_buttons_download'>
            <div className='card_box_download'>
              <button className='button_download'><a style={{ color: 'white', textDecoration: 'none' }} href={CV} download> {t('DOWNLOAD')}</a></button>
              <button className='button_download_2'><a style={{ color: 'white' }} href={CV} download><BsDownload style={{ transform: 'scale(1.4)' }} /></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe