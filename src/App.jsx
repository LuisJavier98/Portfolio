import './App.css'
import video from '../src/Video/Smoke.mp4'
import image from '../src/Images/Foto.png'
import Developer from '../src/Images/Developer.gif'

function App() {

  return (
    <div className="App">
      <video src={video} autoPlay muted loop></video>
      <header className='card_header'>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#aboutMe">About me </a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contactMe">Contact me</a>
        </li>
      </header>
      <div className='card_home'>
        <img src={image} alt="myface" />
        <h1 style={{ color: 'white' }}>Luis Javier</h1>
        <p style={{ color: 'white', textAlign: 'center' }}>I'm a insutrial engineering but now interested in web developer</p>
      </div>
      <div className='card_aboutMe' >
        <h2 style={{ color: 'white', textAlign: 'center', margin: '0' }}>About me</h2>
        <div className='card_personal'>
          <div>
            <img className='card_image' src={image} alt="" />
          <p style={{ color: 'white', textAlign: 'center' }}>Hi , my name is Luis .I'm a industrial engineering , interested in the finantial markets and development webs , I'm 24 years old , I'm a resilient and displined person ,willing and focused on fulfilling all the objectives that proposed to me.
          </p>
          </div>
          <div className='card_education'>
            <p>Education</p>
            <div>
              <p style={{color:'gray'}}>2022-Currently</p>
              <p>Full-stack Developer student at Academlo</p>
            </div>
            <div>
              <p style={{color:'gray'}}>2015-2021</p>
              <p>Graduated from the Industrial Engineering career at the University of Lima</p>
            </div>
          </div>
        </div>

      </div>

      <div className='card_skills'>
        <h2>Skills</h2>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

      </div>
      <div className='card_projects'>
        <div className='card_pokedex'>
          <a href="https://fluffy-tarsier-d169ec.netlify.app" target={'_blank'}><img src="https://elcomercio.pe/resizer/td6f1VIJTQapWzCWmbAJYpDGpGc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5H42F5RT2VFSFKJHRSVEKJHAHM.jpg" alt="Pokedex" /></a>
          <p>Pokedex</p>
        </div>
        <div className='card_rick'>
          <a href="https://harmonious-puffpuff-fe0efd.netlify.app" target={'_blank'}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ9XoXSaaCR-35vvfYAtUtWrUWgRj6OwNPig&usqp=CAU" alt="Rick and Morty" /></a>
          <p>Rick and Morty</p>
        </div>
        <div className='card_ecommerce'>
          <a href="https://jade-caramel-402266.netlify.app" target={'_blank'}><img src="https://www.ecommercenews.pe/wp-content/uploads/2021/10/servicio-ecommerce-subir-ventas.jpg" alt="E-commerce" /></a>
          <p>E-commerce</p>
        </div>
        <div className='card_weather'>
          <a href="https://golden-licorice-3c5c45.netlify.app" target={'_blank'}><img src="https://play-lh.googleusercontent.com/cweCpoG0q7Z4qVBdozGoM1DFhp2U_kHmmbo2F1_qgF6BP-hCRai6uB9U1j28ZhaaYXU" alt="Weather" /></a>
          <p>Weather</p>
        </div>
      </div>

      <footer className='card_contactMe'>
        <div>
          <a href="https://www.linkedin.com/in/luis-javier-burga-campos-97bb77186/" target={'_blank'}>Linkedin</a>
          <a href="https://github.com/LuisJavier98" target={'_blank'}>Github</a>
          <a href="https://www.instagram.com/luisjavier.98/" target={'_blank'}>Instagram</a>
        </div>
        <blockquote style={{ margin: '0px', textAlign: 'center' }}>Created by Luis Burga</blockquote>
      </footer>

    </div>
  )
}

export default App
