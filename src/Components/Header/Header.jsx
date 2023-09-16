
import { Suspense, useEffect } from "react"
import useTranslationFile, { fetchTranslations } from "../../Hook/useTranslationFile"
const files = import.meta.glob('./Translations/**/*.json')
import styles from './Header.module.scss'
const resource = fetchTranslations(files, 'Header')

const Header = ({ isActive, handleChange, headers, dark, handleDark }) => {
  resource.read()
  const { t, i18n } = useTranslationFile(resource, 'Header')

  const pages = ['HOME', 'ABOUT_ME', 'SKILLS', 'PROJECTS', 'CONTACT_ME']
  const changeLanguage = () => {
    if (i18n.language == 'es') {
      localStorage.setItem('language', 'en')
      return i18n.changeLanguage('en')
    }
    if (i18n.language == 'en') {
      localStorage.setItem('language', 'es')
      return i18n.changeLanguage('es')
    }
  }



  return (

    <header ref={headers} className={isActive ? styles.cardHeader : styles.cardHeaderInactive} style={{ backgroundColor: dark ? 'rgb(0,0,0,0.9)' : 'rgba(219, 228, 237,0.9)' }}>
      <li key={'first'} className={styles.buttons}>
        <div className="switch-button" >
          <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" />
          <label htmlFor="switch-label" className="switch-button__label" onClick={changeLanguage}></label>
        </div>
        <div className="switch-button2" >
          <input type="checkbox" name="switch-button" id="switch-label2" className="switch-button__checkbox2" />
          <label onClick={handleDark} htmlFor="switch-label2" className="switch-button__label2"></label>
        </div>
      </li>
      {pages.map(page => (<li key={page}><a className={dark ? styles.cardLinkDark : styles.cardLinkLight} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href={`#${page}`}>{t(`${page}`)}</a></li>))}
    </header>


  )
}


export default Header