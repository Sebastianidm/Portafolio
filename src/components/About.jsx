import React from 'react'
import sebacvimg from '../img/sebacvimg.jpg';
import {Fade} from "react-awesome-reveal"

const About = () => {
  const irArepos = ( ) => {
    window.location.replace("https://github.com/Sebastianidm");
  }
  return (
    <section id='about' >
      
      <div className="container  mx-auto flex px-10 py-20  flex-col items-center">

        
        <div className=" font-mono  sm:w-1/2   flex flex-col sm:items-center sm:text-center sm-16 sm:mb-0 items-center text-center">
              
              <img src={sebacvimg} alt='perfiljpg' className='fotoPerfil rounded-full border-transparent border-2' />

           <Fade cascade >   
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mx-0">
            Hola, soy Sebastián 
            <br className="hidden lg:inline-block" /> Mi pasion es construir aplicaciones Front-end.
          </h1>
          </Fade>
          <p className="mb-8 leading-relaxed">
           
          </p>
          <div className="flex justify-center">
        
            <a
              href="#contact"
              className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Trabaja conmigo
            </a>
            <button
              
              onClick={irArepos}
              className="ml-4 inline-flex  bg-black text-white border-0 py-2 px-6 focus:outline-none  rounded text-lg">
              Mira mi Github
            </button>
          </div>

        </div>
        
       
        
      </div>

     
    </section>
  )
}

export default About