import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Tecnología - Bosisio Flexo",
  description: "Tecnología LED de última generación, control digital de procesos y compromiso con la sostenibilidad en la industria flexográfica.",
};

export default function TechnologyPage() {
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
                ◆ Innovación y Excelencia
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary font-bold">Tecnología</span> & Calidad
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-light mb-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Innovación tecnológica al servicio de la excelencia en impresión
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Tecnología de exposición LED de última generación
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Nuestros equipos LED de exposición representan el estado del arte en la producción 
                  de fotopolímeros digitales. Esta tecnología ofrece ventajas significativas sobre 
                  los sistemas tradicionales de luz UV.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Mayor uniformidad en la exposición de planchas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Reducción del 60% en consumo energético</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Mejor definición de puntos finos y textos pequeños</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Vida útil extendida de los equipos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Mantenimiento mínimo y mayor confiabilidad</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-light to-primary p-12 rounded-2xl text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Precisión LED</h3>
                  <p className="text-gray-100">
                    Control exacto de intensidad, temperatura y tiempo de exposición para 
                    resultados perfectamente reproducibles.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-100 dark:bg-gray-dark p-12 rounded-2xl lg:order-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Control Total</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cada plancha es auditada digitalmente antes de su entrega, garantizando 
                    especificaciones exactas.
                  </p>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Control digital de procesos
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Implementamos sistemas de control digital en todas las etapas de producción, 
                  desde la recepción del archivo hasta la entrega final de las planchas.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Medición automática de espesores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Control densitométrico de cada lote</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Trazabilidad completa del proceso</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Certificados de calidad digitales</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Base de datos histórica de todos los trabajos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Estándares internacionales
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  Nos guiamos por las normas de calidad más exigentes del mercado global, 
                  asegurando que nuestros productos cumplan con los más altos estándares.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Cumplimiento de normas ISO de calidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Estándares G7 para gestión de color</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Mejores prácticas de la industria flexográfica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Capacitación continua del equipo técnico</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-accent-dark to-accent p-12 rounded-2xl text-white">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Certificación</h3>
                  <p className="text-gray-100">
                    Cada proceso está documentado y certificado según estándares 
                    internacionales de la industria gráfica.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-primary to-primary-dark p-12 rounded-2xl text-white lg:order-2">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Eco-friendly</h3>
                  <p className="text-gray-100">
                    Procesos más limpios que reducen significativamente el impacto 
                    ambiental de la producción.
                  </p>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Compromiso con sostenibilidad
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  La sostenibilidad es un pilar fundamental de nuestra operación. 
                  Implementamos tecnologías y procesos que minimizan el impacto ambiental.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Reducción del uso de químicos agresivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Sistemas de reciclaje de agua y solventes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Menor consumo energético con LED</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Gestión responsable de residuos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">✔</span>
                    <span className="text-gray-600 dark:text-gray-400">Optimización de procesos para reducir desperdicios</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="¿Quieres aprovechar nuestra tecnología?"
        description="Descubre cómo nuestra tecnología de última generación puede transformar tus proyectos de packaging"
        buttonText="Solicitar información"
        buttonHref="/contact"
      />
    </div>
  );
}
