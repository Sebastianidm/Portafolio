import React from "react";
import { Fade } from "react-awesome-reveal";
import imagenPerfil from "../img/imagen-perfil.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const irArepos = () => {
    window.open("https://github.com/Sebastianidm", "_blank");
  };

  return (
    <section id="about" className="bg-slate-800">
      <div className="container aboutStyle pt-14 mx-auto flex px-10 flex-col items-center justify-center">
        <img
          src={imagenPerfil}
          alt="perfiljpg"
          className="fotoPerfil rounded-full border-transparent border-2"
        />

        <div className="font-mono sm:w-1/2 flex flex-col sm:items-center sm:text-center sm-16 sm:mb-0 items-center text-center">
          <Fade cascade>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mx-0">
              Hola, soy Sebastián. Mi pasión es construir aplicaciones front-end.
            </h1>
          </Fade>
          <p className="mb-8 leading-relaxed"></p>
          <div className="flex justify-center">
            <Link to="contact">
              <a
                href="#contact"
                className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none rounded text-lg transform transition-transform hover:scale-105"
              >
                Trabaja conmigo
              </a>
            </Link>
            <button
              onClick={irArepos}
              className="ml-4 inline-flex bg-black text-white border-0 py-2 px-6 focus:outline-none rounded text-lg transform transition-transform hover:scale-105"
            >
              Mira mi Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
