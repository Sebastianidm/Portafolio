import React from "react";

const Contact = () => {
  const enviarCorreo = () => {
    location.href = "mailto:sebastiandiazmiranda@gmail.com";
  };
  return (
  
    <section id="contact" className="relative font-mono text-center flex items-center justify-items-center mt-10 ">
      <div className="container px-5 py-10  w-full h-full mx-auto flex  justify-center  mt-10
         ">
            <div className="mt-10">
            
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1 text-white">Quilpue, Valparaiso (Chile)</p>
           
            
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                CORREO ELECTRÓNICO
              </h2>
              <a className="text-white leading-relaxed">
                sebastiandiazmiranda@gmail.com
              </a>
              
             
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed text-white ">+56936896619</p>
            
            </div>


          
          

          
          
      
        
      </div>

      

    </section>
  );
};

export default Contact;