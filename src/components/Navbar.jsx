import React from 'react'

const Navbar = () => {
  const enviarCorreo = () => {
    location.href ='mailto:sebastiandiazmiranda@gmail.com';
  }
  const irArepos = ( ) => {
    window.location.replace("https://github.com/Sebastianidm");
  }
  return (
    <div>
      <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4  text-center md:mb-0">
          <a href="#about" className="ml-3 text-xl ">
            Sebastián Díaz 
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <button onClick={ irArepos} href="#Github" className="mr-5 hover:text-white">
            Mis proyectos
          </button>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
         
        </nav>
        <a
          href="#contact"
          onClick={enviarCorreo}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-sky-700 rounded text-base mt-4 md:mt-0">
          Contactame
         
        </a>
      </div>
    </header>
    </div>
  )
}

export default Navbar