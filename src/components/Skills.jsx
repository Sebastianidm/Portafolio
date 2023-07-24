import React from 'react'
import { skills } from "../data";

const Skills = () => {
  return (
    <section id='skills'>
      <div className='container px-5 py-10 mx-auto font-mono'>
        <div className='text-center mb-20'>
          <h1 className='font-mono sm:text-4xl text-3xl font-semibold title-font text-white  mb-4'>
          Habilidades y Tecnologías
          </h1>
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