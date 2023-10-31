import React from 'react'
import { skills } from "../data";
import {Fade} from "react-awesome-reveal"

const Skills = () => {
  return (
    <section id='skills' className='h-max bg-slate-800 pt-10'>
      <div className='md:container px-5 py-10 mx-auto font-mono  pt-24 md:pb-14 '>
        <div className='text-center mb-20'>
          <Fade cascade>
          <h1 className='title-font sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
          Habilidades y Tecnologías
          </h1>
          </Fade>
          <p className='text-center text-white'>Soy un desarrollador front-end con experiencia en tecnologías web como HTML, CSS, JS y React. También estoy familiarizado con metodologías ágiles y GitFlow. Me encanta colaborar en equipos multidisciplinarios, trabajando junto a desarrolladores backend y diseñadores. Siempre estoy listo para nuevos desafíos y oportunidades para crecer profesionalmente.</p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
        {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className=" bg-black rounded flex p-4 h-full justify-center  ">
                <span className="title-font  font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        
         </div>
      </div>
    </section>
  )
}

export default Skills