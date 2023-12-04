import React from 'react'
import { Link } from 'react-router-dom';


const NotFoundView = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-slate-800 text-white">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-ligth-blue">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl pb-4">
            Lo sentimos, pero esta pagina no esta disponile.
          </p>
          <Link to="/">
          <button className="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none rounded text-lg transform transition-transform hover:scale-105"> Volver al home </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundView