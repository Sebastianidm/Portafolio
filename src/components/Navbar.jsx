import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const enviarCorreo = () => {
    location.href = "mailto:sebastiandiazmiranda@gmail.com";
  };

  return (
    <div className="sticky top-0">
      <header className="bg-gray-800 md:sticky top-0 z-10 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4  text-center md:mb-0">
            <Link to="/" className="ml-3 text-xl ">
              Sebastián Díaz
            </Link>
          </a>
          <div className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link
              to="/components"
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3  text-white rounded text-base mt-4 md:mt-0"
            >
              Componentes
            </Link>
            <a
              href="#contact"
              onClick={enviarCorreo}
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3  text-white rounded text-base mt-4 md:mt-0"
            >
              Contactame
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
