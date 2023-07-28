import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import {Fade} from "react-awesome-reveal"

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400  font-mono  body-font">
      <div className="container  flex flex-col flex-wrap px-5 py-10 mx-auto text-center w-100 lg:px-40">
        <div className="flex flex-col flex-wrap  w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <Fade cascade>
          <h1 className="title-font sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          </Fade>
        </div>

        <div className="flex flex-wrap w-100   ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full sm:p-4 p-2 bg"
            >
              <div className="flex">
                <div className="px-8 py-10  w-full border-4 rounded border-black bg-black opacity-100 ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-cyan-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
