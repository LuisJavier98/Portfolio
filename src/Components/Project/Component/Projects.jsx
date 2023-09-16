import Pokedex from '../../../../static/Images/Pokedex.png'
import Ecommerce from '../../../../static/Images/Ecommerce.png'
import Rick from '../../../../static/Images/Rick.png'
import Weather from '../../../../static/Images/Weather.png'
import Guitar from '../../../../static/Images/GuitarLA.png'
import CotizadorCripto from '../../../../static/Images/CotizadorCripto.png'
import PlanificadordeGastos from '../../../../static/Images/PlanificadorDeGastos.png'
import BuscadorDeBebidas from '../../../../static/Images/BuscadorDeBebidas.png'
import spain from '../../../../static/Images/spain.png'
import england from '../../../../static/Images/england.jpg'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { DiSass, DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import useTranslationFile, { fetchTranslations } from '../../../Hook/useTranslationFile'
const files = import.meta.glob('./Translations/**/*.json')
const resource = fetchTranslations(files, 'Project')


const Projects = [Pokedex, Ecommerce, Rick, Weather, Guitar, CotizadorCripto, PlanificadordeGastos, BuscadorDeBebidas]
const backdrop = '10px 10px 15px white'
export default Projects
export const skills = [{ id: 1, image: <ImHtmlFive style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> },
{ id: 2, image: <IoLogoCss3 style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> },
{ id: 3, image: <DiSass style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> },
{ id: 4, image: <SiTailwindcss style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> },
{ id: 5, image: <SiJavascript style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop}) ` }} /> },
{ id: 6, image: <SiTypescript style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> },
{ id: 7, image: <DiReact style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> },
{ id: 8, image: <SiNextdotjs style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> },
{ id: 9, image: <FaNodeJs style={{ width: '80%', height: '80%', filter: `drop-shadow(${backdrop})` }} /> }
]
export const flags = [spain, england]

export function Etiquetas(index) {
  const { t } = useTranslationFile(resource, 'Project')
  const etiquetas = {
    0: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Pokedex
      </h2>
      <p style={{ color: 'white' }}>{t('POKEDEX')}  </p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://fluffy-tarsier-d169ec.netlify.app/#/pokedex" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Pokedex" target={'_blank'}> <button>{t('CODE')}</button></a>
      </div>
    </div>,
    1: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Ecommerce</h2>
      <p style={{ color: 'white' }}>{t('ECOMMERCE')} </p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://jade-caramel-402266.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Entregable-6" target={'_blank'}><button>{t('CODE')}</button></a>
      </div>
    </div>,
    2: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Rick and Morty</h2>
      <p style={{ color: 'white' }}>{t('RICK_AND_MORTY')}</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://harmonious-puffpuff-fe0efd.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Entregable-3" target={'_blank'}><button>{t('CODE')}</button></a>
      </div>
    </div>,
    3: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Weather</h2>
      <p style={{ color: 'white' }}>{t('WEATHER')}</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://golden-licorice-3c5c45.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Segundo-entrgable" target={'_blank'}><button>{t('CODE')}</button></a>
      </div>
    </div>,
    4: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Guitar LA</h2>
      <p style={{ color: 'white' }}>{t('GUITAR_LA')}</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://guitarla-ecommerce.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/GuitarLA" target={'_blank'}><button>{t('CODE')}</button></a>
      </div>
    </div>,
    5: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Cotizador</h2>
      <p style={{ color: 'white' }}>{t('COTIZADOR')}</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://rococo-meerkat-e3c46c.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/CotizadorDeCryptos" target={'_blank'}><button>{t('CODE')}</button></a>
      </div>
    </div>,
    6: <div className='card_subida'>
      <h2 style={{ textAlign: 'center', color: 'white' }} >Controller</h2>
      <p style={{ color: 'white' }}>{t('CONTROLLER')}</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://gleaming-tapioca-c1db7d.netlify.app" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/ControlDeGastos" target={'_blank'}><button>{t('CODE')}</button></a>
      </div>
    </div>,
    7: <div div className='card_subida' >
      <h2 style={{ textAlign: 'center', color: 'white' }} >Bebidas</h2>
      <p style={{ color: 'white' }}>{t('DRINKS')}</p>
      <div style={{ display: 'flex', gap: '8%' }}>
        <a href="https://merry-alfajores-80ad78.netlify.app/" target={'_blank'}><button>Demo</button></a>
        <a href="https://github.com/LuisJavier98/Bebidas" target={'_blank'}><button>{t('CODE')}</button></a>
      </div>
    </div >
  }
  return etiquetas[index]
}


