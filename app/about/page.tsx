import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Quiénes Somos - Bosisio Flexo",
  description: "Más de 30 años de experiencia en packaging, preprensa y fotopolímeros digitales. Conoce nuestra historia y compromiso con la calidad.",
};

export default function AboutPage() {
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
              <span className="px-4 py-1.5 bg-accent/10 border border-accent/40 rounded-md text-accent-dark dark:text-accent text-sm font-semibold">
                ◆ Nuestra Historia
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Quiénes <span className="text-primary font-bold">Somos</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Más de 30 años impulsando la calidad y eficiencia en la industria del packaging
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Nuestra Historia</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                Bosisio Flexo S.A. es una empresa argentina líder en soluciones de packaging, 
                preprensa y producción de fotopolímeros digitales Full HD. Desde hace más de 
                tres décadas, hemos trabajado junto a las marcas más importantes del país, 
                imprentas especializadas y estudios de diseño.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                Nuestro compromiso es ser el puente entre el diseño y la impresión final, 
                garantizando resultados impecables mediante tecnología de última generación 
                y un equipo de especialistas altamente capacitados.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Nuestra Misión</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                Impulsamos la calidad y eficiencia de tus empaques mediante procesos industriales 
                avanzados, equipos LED de última generación y especialistas en flexografía, color 
                y fotopolímeros digitales Full HD.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Nos guiamos por estándares internacionales de calidad y mejores prácticas del 
                mercado, con un fuerte compromiso hacia la sostenibilidad y la innovación continua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-100 dark:bg-gray-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,49,119,0.1),transparent_50%)]"></div>
        <div className="container-custom relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:to-gray-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Excelencia</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Control exhaustivo en cada etapa del proceso para garantizar máxima consistencia 
                y repetitividad en cada proyecto.
              </p>
            </div>
            <div className="bg-white dark:bg-gradient-to-br dark:from-black dark:to-gray-dark p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-all duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Compromiso</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Acompañamos a nuestros clientes en cada paso, brindando soporte técnico 
                continuo y asesoramiento especializado.
              </p>
            </div>
            <div className="bg-gradient-to-br from-black to-gray-dark p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-glow">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 border border-primary/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">Innovación</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Inversión constante en tecnología de punta para ofrecer soluciones de 
                última generación en la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="¿Quieres conocer más sobre nosotros?"
        description="Estamos aquí para responder todas tus preguntas y colaborar en tu próximo proyecto"
        buttonText="Contáctanos"
        buttonHref="/contact"
      />
    </div>
  );
}
