"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialNetworks } from "../../../data"; // Ajusta la ruta según tu proyecto

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [msgSent, setMsgSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs.sendForm(
      "service_t3jprif",
      "template_xjf7xth",
      formRef.current,
      "Y66q4EOdNHXU0tuc-"
    )
    .then(
      () => {
        setMsgSent(true);
        formRef.current?.reset();
      },
      (error) => {
        console.log(error.text);
        alert("Ocurrió un error al enviar el mensaje.");
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="w-full max-w-lg">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-xl space-y-4"
        >
          <h1 className="text-2xl font-bold text-center mb-4">Contáctame</h1>

          <input
            type="text"
            name="from_name"
            placeholder="Tu nombre"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Tu email"
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            className="w-full p-3 rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Enviar
          </button>

          {msgSent && (
            <p className="text-green-400 text-center mt-2">
              ¡Mensaje enviado con éxito!
            </p>
          )}
        </form>

        <div className="mt-8 flex justify-center gap-6">
          {socialNetworks.map((network) => (
            <a
              key={network.id}
              href={network.src}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              {network.logo}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
