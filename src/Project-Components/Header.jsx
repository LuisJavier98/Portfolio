
const Header = ({ language, isActive, handleChange, headers, dark, handleLanguage, handleDark }) => {


  return (
    <header ref={headers} className={isActive ? 'card_header' : 'card_header_inactive'} style={{ backgroundColor: dark ? 'rgb(0,0,0,0.9)' : 'rgba(219, 228, 237,0.9)' }}>
      <li className='buttons'>
        <div className="switch-button" >
          <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" />
          <label htmlFor="switch-label" className="switch-button__label" onClick={handleLanguage}></label>
        </div>
        <div className="switch-button2" >
          <input type="checkbox" name="switch-button" id="switch-label2" className="switch-button__checkbox2" />
          <label onClick={handleDark} htmlFor="switch-label2" className="switch-button__label2"></label>
        </div>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#home">{language ? 'Home' : 'Principal'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#aboutMe">{language ? 'About me' : 'Acerca de mi'} </a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#skills">{language ? 'Skills' : 'Habilidades'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#projects">{language ? 'Projects' : 'Proyectos'}</a>
      </li>
      <li>
        <a className={dark ? 'cardLinkDark' : 'cardLinkLight'} style={{ transition: 'all 500ms ease' }} onClick={handleChange} href="#contactMe">{language ? 'Contact me' : 'Contactame'}</a>
      </li>
    </header>
  )
}

export default Header