import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Servicios - Bosisio Flexo",
  description: "Preprensa, fotopolímeros digitales Full HD, gestión de color y asesoramiento técnico para la industria flexográfica.",
};

const services = [
  {
    id: 1,
    title: "Preprensa & Gestión de Proyectos de Packaging",
    description: "Transformamos diseños en archivos técnicamente listos para impresión.",
    features: [
      "Ajustes técnicos de archivos",
      "Trapping, reticulados y sobreimpresiones",
      "Separación de color precisa",
      "Pruebas contractuales certificadas",
      "Control de calidad automatizado",
      "Optimización para diferentes sustratos",
    ],
    benefits: [
      "Menos errores en producción",
      "Flujos de trabajo más rápidos",
      "Resultados fieles al diseño original",
      "Reducción de costos operativos",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fotopolímeros Digitales – Full HD",
    description: "Producción de planchas flexográficas digitales de alta definición, uniformidad y durabilidad.",
    features: [
      "Laminación digital de precisión",
      "Exposición LED de última generación",
      "Revelado optimizado con control de temperatura",
      "Control de superficie mediante medición",
      "Certificación de calidad por lote",
      "Almacenamiento y logística especializada",
    ],
    benefits: [
      "Mayor detalle y resolución",
      "Mejor transferencia de tinta",
      "Mayor vida útil de la plancha",
      "Máxima consistencia entre tiradas",
      "Reducción de desperdicios",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Gestión de Color & Control de Calidad",
    description: "Aseguramos que lo que se diseña es lo que se imprime.",
    features: [
      "Creación de perfiles ICC personalizados",
      "Curvas de compensación para diferentes sustratos",
      "Control densitométrico y espectrofotométrico",
      "Pruebas cromáticas certificadas",
      "Calibración de equipos de medición",
      "Auditorías de color en planta",
    ],
    benefits: [
      "Consistencia cromática garantizada",
      "Reducción de desperdicios por error de color",
      "Optimización del uso de tintas",
      "Predicción de resultados finales",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        <circle cx="17" cy="7" r="3" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Asesoramiento Técnico para Flexografía",
    description: "Acompañamos a imprentas y marcas para optimizar procesos.",
    features: [
      "Asistencia técnica en planta",
      "Calibración de máquinas flexográficas",
      "Resolución de problemas de impresión",
      "Recomendaciones de tintas y anilox",
      "Selección de sustratos óptimos",
      "Capacitación del personal técnico",
    ],
    benefits: [
      "Mejora en rendimiento de máquina",
      "Optimización de recursos productivos",
      "Reducción de tiempos de setup",
      "Capacitación continua del equipo",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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
                ◆ Soluciones Profesionales
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Nuestros <span className="text-primary font-bold">Servicios</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-light mb-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Preprensa, fotopolímeros digitales Full HD, gestión de color y asesoramiento técnico especializado
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${index % 2 === 0 ? 'bg-accent/10 text-accent border border-accent/40' : 'bg-primary/10 text-primary border border-primary/30'}`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white dark:bg-gradient-to-br dark:from-gray-dark dark:to-black p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary"></span>
                      Incluye:
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-primary mr-2 mt-1">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary"></span>
                      Beneficios:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-primary-light font-medium flex items-start">
                          <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="¿Necesitas más información?"
        description="Nuestro equipo técnico está listo para asesorarte y encontrar la mejor solución para tu proyecto"
        buttonText="Solicitar presupuesto"
        buttonHref="/contact"
      />
    </div>
  );
}
