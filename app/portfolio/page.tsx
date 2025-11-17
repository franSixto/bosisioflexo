import { Metadata } from "next";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Casos de Éxito - Bosisio Flexo",
  description: "Casos de éxito y proyectos destacados en packaging, preprensa y fotopolímeros digitales.",
};

const portfolioItems = [
  {
    id: 1,
    title: "Packaging premium para alimentos",
    description: "Plancha HD + control de color + pruebas contractuales = reducción del 37% en rechazos.",
    category: "Alimentos",
    challenge: "Una empresa líder de alimentos gourmet enfrentaba altos índices de rechazo en sus empaques flexibles debido a inconsistencias de color y problemas de registro.",
    solution: "Implementamos planchas Full HD combinadas con un sistema completo de gestión de color, incluyendo perfiles ICC personalizados y pruebas contractuales certificadas.",
    results: [
      "Reducción del 37% en tasas de rechazo",
      "Consistencia cromática del 98% entre tiradas",
      "Ahorro anual estimado de USD 45,000",
      "Tiempo de setup reducido en 25%",
    ],
    image: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Rebranding de marca masiva",
    description: "Más de 120 SKU entregados en tiempo récord con consistencia cromática garantizada.",
    category: "Retail",
    challenge: "Una marca masiva necesitaba relanzar su imagen en más de 120 productos diferentes con plazos muy ajustados y máxima consistencia visual.",
    solution: "Establecimos un flujo de trabajo optimizado con preprensa centralizada, gestión de color unificada y producción de planchas en paralelo.",
    results: [
      "120+ SKU procesados en 6 semanas",
      "Consistencia cromática entre todos los productos",
      "Cero retrasos en el lanzamiento",
      "Certificación de calidad en todas las planchas",
    ],
    image: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Optimización flexográfica para imprenta",
    description: "Ajuste técnico y calibración que aumentó un 22% la velocidad de máquina.",
    category: "Optimización",
    challenge: "Una imprenta flexográfica experimentaba bajas velocidades de producción y problemas recurrentes de calidad que afectaban su rentabilidad.",
    solution: "Realizamos una auditoría completa del proceso, desde las planchas hasta la configuración de máquina, implementando mejoras técnicas y capacitación del personal.",
    results: [
      "Aumento del 22% en velocidad de máquina",
      "Reducción del 40% en tiempos de setup",
      "Mejora significativa en transferencia de tinta",
      "Capacitación técnica del equipo operativo",
    ],
    image: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Packaging sostenible para cosmética",
    description: "Soluciones eco-friendly sin comprometer calidad ni impacto visual.",
    category: "Cosmética",
    challenge: "Una marca de cosmética natural buscaba empaques que reflejaran sus valores de sostenibilidad manteniendo alta calidad de impresión.",
    solution: "Desarrollamos un flujo completo utilizando tecnología LED, tintas base agua y sustratos reciclables, optimizando cada etapa del proceso.",
    results: [
      "Reducción del 60% en uso de químicos",
      "Packaging 100% reciclable",
      "Calidad de impresión superior",
      "Certificación de proceso sostenible",
    ],
    image: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Etiquetas de alta complejidad",
    description: "Microimpresión y detalles finos para la industria farmacéutica.",
    category: "Farmacéutica",
    challenge: "Producir etiquetas farmacéuticas con textos de 2pt legibles y códigos de barras de alta densidad.",
    solution: "Utilizamos nuestras planchas Full HD con exposición LED y control micrométrico de espesores para lograr la definición requerida.",
    results: [
      "Legibilidad perfecta en textos de 2pt",
      "100% de lectura en códigos de barras",
      "Aprobación regulatoria en primer intento",
      "Proceso validado y documentado",
    ],
    image: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Impresión en film metalizado",
    description: "Control de ganancia de punto en sustratos desafiantes.",
    category: "Snacks",
    challenge: "Lograr consistencia en impresión sobre film metalizado, conocido por su difícil comportamiento en flexografía.",
    solution: "Creamos curvas de compensación específicas, perfiles de color personalizados y planchas optimizadas para este sustrato particular.",
    results: [
      "Ganancia de punto controlada al ±2%",
      "Colores brillantes y saturados",
      "Repetitividad entre lotes del 99%",
      "Cliente satisfecho con resultados",
    ],
    image: (
      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function PortfolioPage() {
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
                ◆ Proyectos Destacados
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Casos de <span className="text-primary font-bold">Éxito</span>
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Resultados comprobados que respaldan nuestro compromiso con la excelencia
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="space-y-12">
            {portfolioItems.map((item, index) => (
              <article 
                key={item.id}
                className="bg-white dark:bg-gray-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-to-br from-primary to-primary-dark p-12 flex flex-col items-center justify-center text-white">
                    <div className="mb-6">{item.image}</div>
                    <div className="inline-block bg-accent/20 text-white text-sm px-4 py-2 rounded-full font-semibold border border-accent/40">
                      {item.category}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Desafío:</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Solución:</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Resultados:</h3>
                        <ul className="space-y-2">
                          {item.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-accent mr-2 mt-1">✔</span>
                              <span className="text-gray-600 dark:text-gray-400">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="¿Tu proyecto puede ser el próximo caso de éxito?"
        description="Contáctanos y descubre cómo podemos optimizar tus procesos de packaging e impresión"
        buttonText="Comenzar un proyecto"
        buttonHref="/contact"
      />
    </div>
  );
}
