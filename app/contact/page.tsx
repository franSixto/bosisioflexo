import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto - Bosisio Flexo",
  description: "Contáctanos para consultas sobre packaging, preprensa, fotopolímeros digitales y servicios flexográficos.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="relative bg-white dark:bg-black text-gray-900 dark:text-white section-padding pt-32 overflow-hidden">
        {/* Fondo tecnológico animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-gray-50 dark:from-black dark:via-primary/5 dark:to-black"></div>
        
        {/* Grid tecnológico de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,49,119,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(108,49,119,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Efectos de luz violeta */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(108,49,119,0.15),transparent_40%)]"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-md text-primary text-sm font-semibold">
                ◆ Hablemos de tu Proyecto
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary font-bold">Contacto</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-light mb-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Estamos aquí para ayudarte con tu próximo proyecto
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Hablemos de tu proyecto
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Nuestro equipo técnico está listo para asesorarte y encontrar la mejor 
                solución para tus necesidades de packaging e impresión flexográfica.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Ubicación</h3>
                    <p className="text-gray-600 dark:text-gray-400">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a 
                      href="mailto:info@bosisioflexo.com.ar" 
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      info@bosisioflexo.com.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                    <a 
                      href="tel:+541100000000" 
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      +54 11 0000-0000
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white dark:bg-gradient-to-br dark:from-gray-dark dark:to-black p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Horario de atención</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p><strong className="text-primary">Lunes a Viernes:</strong> 9:00 - 18:00 hs</p>
                  <p><strong className="text-primary">Respuesta a consultas:</strong> Dentro de las 24 horas hábiles</p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white dark:bg-gradient-to-br dark:from-gray-dark dark:to-black p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Envíanos un mensaje
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-primary/10 to-white dark:from-primary-dark dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,49,119,0.2),transparent_70%)]"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">¿Prefieres hablar directamente?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo comercial está disponible para atender tus consultas y 
            brindarte asesoramiento personalizado
          </p>
          <a href="tel:+541100000000" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 border-2 border-primary group">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Llamar ahora</span>
          </a>
        </div>
      </section>
    </div>
  );
}
