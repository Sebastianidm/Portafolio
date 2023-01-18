import React from 'react'

const Contact = () => {

  const enviarCorreo = () => {
    location.href ='mailto:sebastiandiazmiranda@gmail.com';
  }
  return (
    <section id="contact" className="relative" >
    <div className="container px-5 py-10 h-full mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.7)" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26753.416973218587!2d-71.44305545!3d-33.05180345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96627ef5a2b5a5a7%3A0x50d9a53f7f329f92!2zUXVpbHB1w6ksIFZhbHBhcmHDrXNv!5e0!3m2!1ses!2scl!4v1673965776789!5m2!1ses!2scl"
        />
        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              DIRECCIÓN
            </h2>
            <p className="mt-1">
              Lago las torres  <br />
              Quilpue, Valparaiso (Chile)
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              CORREO ELECTRÓNICO
            </h2>
            <a className="text-indigo-400 leading-relaxed">
              sebastiandiazmiranda@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              NÚMERO DE TELÉFONO
            </h2>
            <p className="leading-relaxed">+56936896619</p>
          </div>
        </div>
      </div>
      <div
        netlify
        name="contact"
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-5">
        <h2 className="text-white sm:text-4xl text-3xl mb-3 pb-2 font-medium title-font">
          Contactame ! 
        </h2>
        
        <button
         
          onClick={enviarCorreo}
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10">
          Enviar correo
          
        </button>
       
      </div>
    </div>
  </section>
  )
}

export default Contact