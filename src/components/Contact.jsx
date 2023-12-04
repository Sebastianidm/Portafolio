import React from "react";

const Contact = () => {
  const enviarCorreo = () => {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=sebastiandiazmiranda@gmail.com";
  };

  return (
    <section
      id="contact"
      className="bg-gray-800 py-10 text-white min-h-screen flex items-center"
    >
      <div className="container mx-auto ">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold mb-4">¡Contáctame!</h2>
          <p>Estoy aquí para responder a cualquier pregunta que puedas tener.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-10">
         

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">CORREO ELECTRÓNICO</h3>
            <a className="text-white hover:underline" href="#" onClick={enviarCorreo}>
              sebastiandiazmiranda@gmail.com
            </a>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">NÚMERO DE TELÉFONO</h3>
            <p>+56936896619</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
