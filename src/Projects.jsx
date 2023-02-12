import Pokedex from '../src/Images/Pokedex.png'
import Ecommerce from '../src/Images/Ecommerce.png'
import Rick from '../src/Images/Rick.png'
import Weather from '../src/Images/Weather.png'
import Guitar from '../src/Images/GuitarLA.png'
import CotizadorCripto from '../src/Images/CotizadorCripto.png'
import PlanificadordeGastos from './Images/PlanificadorDeGastos.png'
import BuscadorDeBebidas from './Images/BuscadorDeBebidas.png'
import spain from './Images/spain.png'
import england from './Images/england.jpg'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { DiSass, DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'

const Projects = [Pokedex, Ecommerce, Rick, Weather, Guitar, CotizadorCripto, PlanificadordeGastos, BuscadorDeBebidas]
const backdrop = '10px 10px 15px white'
export default Projects
export const skills = [<ImHtmlFive style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />,
<IoLogoCss3 style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />,
<DiSass style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />,
<SiTailwindcss style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />,
<SiJavascript style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop}) ` }} />,
<SiTypescript style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />,
<DiReact style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />,
<SiNextdotjs style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />,
<FaNodeJs style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} />
]
export const flags = [spain, england]

export function Etiquetas(language, index) {
  const etiquetas = {
    0: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Pokedex
      </h2>
      <p style={{ color: 'white' }}>{language ? 'Web page focus on searching pokemons by type and name , made with Html , CSS , React and the libraries Redux , Routes and Axios' : 'Pagina enfoacada en la busqueda de pokemones por tipo y nombre , desarrolada con Html,CSS,React y sus librerias Routes , Redux y Axios'}  </p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://fluffy-tarsier-d169ec.netlify.app/#/pokedex" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Pokedex" target={'_blank'}> <button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div>,
    1: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >E-commerce</h2>
      <p style={{ color: 'white' }}>{language ? 'Web focus on searching products and filtering by price and category , developed with Html , CSS , React and the libraries Redux , Routes , Hook form and Axios' : 'Web enfocada a la busqueda de productos de una tienda virtual con opcion a filtrarlo por categoria y precio , desarrollada con Html , CSS , React and the libraries Redux , Routes , Hook form and Axios'} </p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://jade-caramel-402266.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Entregable-6" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div>,
    2: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Rick and Morty Api</h2>
      <p style={{ color: 'white' }}>{language ? 'App focus on searching Rick and Mortys chapters made with Html,CSS, React and the libraries React Select and Axios' : 'Web enfocada en la busqueda de capitulos de la serie Rick and Morty, desarrollada con Html,CSS,React y las librerias React Select y Axios '}  </p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://harmonious-puffpuff-fe0efd.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Entregable-3" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div>,
    3: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Weather Api</h2>
      <p style={{ color: 'white' }}>{
        language ? 'Web focus on showing the dates about the weather in the countrey where was searching ,it was developed with Html,CSS , React and its library Axios' : 'Web enfocada en mostras los datos acerca del clima en el lugar donde es requerida , fue realizada con Html , CSS ,React y su libreria Axios'
      }</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://golden-licorice-3c5c45.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Segundo-entrgable" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div>,
    4: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Guitar LA</h2>
      <p style={{ color: 'white' }}>{
        language ? 'Web focus on showing guitars on sell ,with a data base created in Strapi and publicated in Render,it was developed with TailwindCss and Nextjs ' : 'Web enfocada en mostrar guitarras en venta , la base de datos fue creada en Strapi y publicada en Render , la pagina fue desarrollada con Nextjs y TailwindCss para el diseño '
      }</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://guitarla-ecommerce.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/GuitarLA" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div>,
    5: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Cotizador de Criptomonedas</h2>
      <p style={{ color: 'white' }}>{
        language ? 'Web focused on showing the most valued cryptocurrencies in the market, Axios was used for the requests as well as React as the main framework and TailwindCss for the design of the page' : 'Web enfocada en mostrar las crritomonedas mas cotizadas del mercado , se hizo uso de axios para las peticiones asi como React como framework principal y TailwindCss para el diseño de la pagina '
      }</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://rococo-meerkat-e3c46c.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/CotizadorDeCryptos" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div>,
    6: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Planificador de Gastos</h2>
      <p style={{ color: 'white' }}>{
        language ? 'Web page designed for budget control, it was designed with React as the main framework and Css for the design, likewise the ReactCircularProgressBar and reactSwipeableList libraries were used to add animations.' : 'Pagina web diseñada para el control presupuestario , fue diseñada con React como principal framework y Css para el diseño , asi mismo se utilizaron las librerias ReactCircularProgressBar y reactSwipeableList para añadirle animaciones.'
      }</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://gleaming-tapioca-c1db7d.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/ControlDeGastos" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div>,
    7: <div div className='card_subida' >
      <h2 style={{ textAlign: 'center', color: 'white' }} >Buscador de Bebidas</h2>
      <p style={{ color: 'white' }}>{
        language ? 'Web focused on the search for drink combinations that you can create, each option has its respective preparation instruction. The page was designed with React as the main framework and Bootstrap for the design' : 'Web enfocada en la busqueda de combinaciones de bebidas que puedes crear , cada opcion cuenta con su respectiva instruccion de preparacion .La pagina fue diseñada con React como framework principal y Bootstrap para el diseño'
      }</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://merry-alfajores-80ad78.netlify.app/" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Bebidas" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
      </div>
    </div >
  }
  return etiquetas[index]
}


