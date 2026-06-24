import React from 'react';
import "./Contacto.css";
import { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Mensaje enviado:", form);

    // acá después conectar con EmailJS, Firebase, etc.

    alert("Gracias por tu mensaje ✨");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="container contact">
      <h1>Contacto</h1>

      <p>
        Si querés encargar, consultar por una pieza o simplemente
        conectar, podés escribirme a través de este formulario.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensaje"
          placeholder="Escribí tu mensaje..."
          value={form.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;