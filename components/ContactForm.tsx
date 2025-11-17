"use client";

import { useState } from "react";

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("¡Gracias por contactarnos! Nuestro equipo responderá dentro de las 24 horas hábiles.");
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          mensaje: "",
        });
      } else {
        setStatus("error");
        setMessage(data.message || "Hubo un error al enviar el formulario. Por favor, intenta nuevamente.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Hubo un error al enviar el formulario. Por favor, intenta nuevamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Nombre <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-gray-dark border border-gray-300 dark:border-primary/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-primary/50"
          placeholder="Tu nombre completo"
        />
      </div>

      <div>
        <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Empresa
        </label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-gray-dark border border-gray-300 dark:border-primary/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-primary/50"
          placeholder="Nombre de tu empresa"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Email <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-gray-dark border border-gray-300 dark:border-primary/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-primary/50"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-gray-dark border border-gray-300 dark:border-primary/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all hover:border-primary/50"
          placeholder="+54 11 1234-5678"
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Mensaje <span className="text-primary">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white dark:bg-gray-dark border border-gray-300 dark:border-primary/30 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none hover:border-primary/50"
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 border border-primary-light flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Enviando mensaje...</span>
          </>
        ) : (
          <>
            <span>Enviar mensaje</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      {message && (
        <div
          className={`p-4 rounded-lg border ${
            status === "success"
              ? "bg-primary/10 text-green-400 border-primary/40 shadow-glow"
              : "bg-red-900/20 text-red-400 border-red-500/40"
          }`}
        >
          <div className="flex items-start gap-3">
            {status === "success" ? (
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
            <span>{message}</span>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 justify-center pt-2">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
        <p className="text-sm text-gray-500 text-center">
          ⏱ Respuesta en 24hs hábiles
        </p>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
      </div>
    </form>
  );
}
