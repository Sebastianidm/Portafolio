import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  

  return (
    <div className=" top-0 font-mono bg-slate-800  flex  justify-center    lg:justify-center lg:space-between ">
      <header className="   top-0 mt-3 mb-3 z-10 lg:w-70 lg:border-2 md:border-cyan-500 lg:rounded-full lg:bg-transparent ">
        <div className="container mx-auto lg:flex lg:flex-wrap lg:p-5 flex-col lg:flex-row lg:items-center  items-center ">
        <a className="title-font font-medium text-white mb-4 text-center lg:mb-0 lg:mt-1">
            <Link to="/welcome" className="ml-3 text-xl">
              Sebastián Díaz
            </Link>
          </a>
          <div className="lg:mr-auto lg:ml-4 lg:py-1 lg:pl-4 lg:border-l lg:border-gray-700 lg:flex lg:flex-row lg:flex-wrap lg:items-center text-base lg:justify-center  flex flex-col justify-center mt-1 text-center ">
           
            <div className="lg:inline-flex lg:items-center text-white bg-black border-0 py-1 px-3 mx-3 w-36 rounded text-base lg:mt-0 mt-3 ring-2 ring-black">
            <Link to="skills">
              <a
               
              >
                Habilidades
              </a>
            </Link>
            </div>

            <div className="lg:inline-flex lg:items-center bg-black border-0 py-1 px-3 mx-3 text-white w-36 rounded text-base lg:mt-0 mt-3 ring-2 ring-black">
            <Link to="projects">
              <a
                
              >
                Proyectos
              </a>
            </Link>
            </div>


            <div className="lg:inline-flex lg:items-center bg-black border-0 py-1 px-3 mx-3 text-white w-36 rounded text-base lg:mt-0 mt-3 ring-2 ring-black">
            <Link to="contact">
              <a
                
              >
                Contact
              </a>
            </Link>
            </div> 



            
            
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
