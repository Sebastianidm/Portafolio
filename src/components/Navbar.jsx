import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="bg-slate-800 fixed w-full z-20 top-0 left-0 border-b border-slate-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="/src/img/imagen-perfil.jpg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <Link>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Sebastián Díaz
            </span>
          </Link>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto  md:order-2 ">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-800 dark:bg-gray-800 md:dark:bg-gray-900 ">
            <Link to="skills">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0"
                aria-current="page"
              >
                Habilidades
              </a>
            </Link>
            <Link to="projects">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  "
              >
                Proyectos
              </a>
            </Link>
            <Link to="contact">
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0  "
              >
                Contacto
              </a>
            </Link>
          </ul>
        </div>
        <div className="md:hidden py-3 pl-3 pr-4 text-white rounded ">
          <button  onClick={handleSidebarToggle}>
            <svg
              className="w-6 h-6 text-white-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {sidebarOpen && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 ">
            <div className="fixed top-0 left-0 z-51 w-64 h-full bg-slate-800 shadow-lg">
              <button
                className="px-4 py-2 my-5 mx-5 text-white rounded-md hover:bg-gray-100"
                onClick={() => setSidebarOpen(false)}
              >
                <svg
                  className="w-6 h-6 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
              <ul className="flex flex-col p-4 mt-10">
                <Link  to="skills" onClick={handleSidebarToggle}>
                <li className="flex flex-row text-white mx-5 my-5">
                  <p className="mr-2">Habilidades</p>
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 7V2.13a2.98 2.98 0 0 0-1.293.749L4.879 5.707A2.98 2.98 0 0 0 4.13 7H9Z" />
                    <path d="M18.066 2H11v5a2 2 0 0 1-2 2H4v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 20 20V4a1.97 1.97 0 0 0-1.934-2ZM10 18a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2Zm3 0a1 1 0 0 1-2 0v-6a1 1 0 1 1 2 0v6Zm3 0a1 1 0 0 1-2 0v-4a1 1 0 1 1 2 0v4Z" />
                  </svg>
                </li>
                </Link>
                <Link to="projects" onClick={handleSidebarToggle}>
                <li className="flex flex-row text-white mx-5 my-5">
                  <p className="mr-2">Proyectos</p>
                  <svg
                    class="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                    />
                  </svg>
                </li>
                </Link>
                <Link to="contact" onClick={handleSidebarToggle}>
                <li className="flex flex-row text-white mx-5 my-5">
                 <p className="mr-2">Contacto</p>
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
