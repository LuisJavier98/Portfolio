import React from 'react'
import Projects from '../Projects.jsx'


const MyProject = ({ language, ProjectMove, ProjectNext, SelectCard, projectNumber, ElementS, dark }) => {


  return (
    <div className={dark ? 'card_projects' : 'card_projectsLight'} id='projects'>
      <div data-aos="fade-up" className='card_contain_projects'>
        <div ref={SelectCard} className='card_contain' >
          <div ref={ProjectMove}
            className='projects'>
            {Projects.map((project, indice) => <div onMouseOver={() => ElementS(100, indice)} onMouseOut={() => ElementS(0, indice)} className=' project'>
              <img id={indice} src={project} alt="" />
              {
                indice == 0 ?
                  <div className='card_subida'>
                    <h2 style={{ textAlign: 'center', color: 'white' }} >Pokedex
                    </h2>
                    <p style={{ color: 'white' }}>{language ? 'Web page focus on searching pokemons by type and name , made with Html , CSS , React and the libraries Redux , Routes and Axios' : 'Pagina enfoacada en la busqueda de pokemones por tipo y nombre , desarrolada con Html,CSS,React y sus librerias Routes , Redux y Axios'}  </p>
                    <div style={{ display: 'flex', gap: '8%' }}>
                      <a href="https://fluffy-tarsier-d169ec.netlify.app/#/pokedex" target={'_blank'}><button>Demo</button></a>
                      <a href="https://github.com/LuisJavier98/Pokedex" target={'_blank'}> <button>{language ? 'Code' : 'Codigo'}</button></a>
                    </div>
                  </div>
                  : indice == 1 ?
                    <div className='card_subida'>
                      <h2 style={{ textAlign: 'center', color: 'white' }} >E-commerce</h2>
                      <p style={{ color: 'white' }}>{language ? 'Web focus on searching products and filtering by price and category , developed with Html , CSS , React and the libraries Redux , Routes , Hook form and Axios' : 'Web enfocada a la busqueda de productos de una tienda virtual con opcion a filtrarlo por categoria y precio , desarrollada con Html , CSS , React and the libraries Redux , Routes , Hook form and Axios'} </p>

                      <div style={{ display: 'flex', gap: '8%' }}>
                        <a href="https://jade-caramel-402266.netlify.app" target={'_blank'}><button>Demo</button></a>
                        <a href="https://github.com/LuisJavier98/Entregable-6" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
                      </div>
                    </div>
                    : indice == 2 ?
                      <div className='card_subida'>
                        <h2 style={{ textAlign: 'center', color: 'white' }} >Rick and Morty Api</h2>
                        <p style={{ color: 'white' }}>{language ? 'App focus on searching Rick and Mortys chapters made with Html,CSS, React and the libraries React Select and Axios' : 'Web enfocada en la busqueda de capitulos de la serie Rick and Morty, desarrollada con Html,CSS,React y las librerias React Select y Axios '}  </p>
                        <div style={{ display: 'flex', gap: '8%' }}>
                          <a href="https://harmonious-puffpuff-fe0efd.netlify.app" target={'_blank'}><button>Demo</button></a>
                          <a href="https://github.com/LuisJavier98/Entregable-3" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
                        </div>
                      </div>
                      : <div className='card_subida'>
                        <h2 style={{ textAlign: 'center', color: 'white' }} >Weather Api</h2>
                        <p style={{ color: 'white' }}>{
                          language ? 'Web focus on showing the dates about the weather in the countrey where was searching ,it was developed with Html,CSS , React and its library Axios' : 'Web enfocada en mostras los datos acerca del clima en el lugar donde es requerida , fue realizada con Html , CSS ,React y su libreria Axios'
                        }</p>
                        <div style={{ display: 'flex', gap: '8%' }}>
                          <a href="https://golden-licorice-3c5c45.netlify.app" target={'_blank'}><button>Demo</button></a>
                          <a href="https://github.com/LuisJavier98/Segundo-entrgable" target={'_blank'}><button>{language ? 'Code' : 'Codigo'}</button></a>
                        </div>
                      </div>
              }
            </div>)}
          </div>
        </div>
        <div className='card_contain_buttonProject'>
          {Projects.map((project, indice) => <button className={indice == projectNumber ? "buttonProjectActive" : "buttonProjectInactive"} onClick={ProjectNext} id={indice}></button>)}
        </div>
      </div>
      <div className='text_project' data-aos="zoom-in-up" style={{ textAlign: 'center', color: dark ? 'white' : 'black' }}><h2>{language ? 'Projects' : 'Proyectos'}</h2><hr /> <p style={{ color: dark ? 'white' : 'black' }}>{language ? 'These are 4 of my projects front end developed in Academlo' : 'Estos son 4 de mis proyectos desarrollados en Academlo'}
      </p>
      </div>
    </div>
  )
}

export default MyProject