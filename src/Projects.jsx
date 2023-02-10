import Pokedex from '../src/Images/Pokedex.png'
import Ecommerce from '../src/Images/Ecommerce.png'
import Rick from '../src/Images/Rick.png'
import Weather from '../src/Images/Weather.png'
import spain from './Images/spain.png'
import england from './Images/england.jpg'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si'
import { DiSass, DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'

const Projects = [Pokedex, Ecommerce, Rick, Weather]
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
