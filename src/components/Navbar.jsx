import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const enviarCorreo = () => {
    location.href = "mailto:sebastiandiazmiranda@gmail.com";
  };

  return (
    <div className=" top-0 font-mono bg-gray-900 flex justify-center  ">
      <header className="  sticky top-0 mt-3 mb-3 z-10 w-1/2 border-2 border-cyan-500 rounded-full bg-transparent ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4  text-center md:mb-0">
            <Link to="/" className="ml-3 text-xl ">
              Sebastián Díaz
            </Link>
          </a>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link
              to="/components"
              className=" items-center bg-gray-800 border-0 py-1 px-3  text-white rounded text-base mt-4 md:mt-0  hidden"
            >
              Componentes
            </Link>
            <a
              href="#contact"
              onClick={enviarCorreo}
              className="inline-flex items-center bg-black border-0 py-1 px-3  text-white rounded text-base mt-4 md:mt-0"
            >
              Contáctame
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
