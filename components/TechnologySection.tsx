"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Tecnología de exposición LED",
    description: "Aumenta uniformidad, reduce consumo energético y mejora definición.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Control digital de procesos",
    description: "Todas las planchas son auditadas y medidas antes de su entrega.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Estándares internacionales",
    description: "Nos guiamos por normas de calidad globales y mejores prácticas.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Compromiso con sostenibilidad",
    description: "Procesos más limpios, menos químicos, menor impacto ambiental.",
  },
];

export default function TechnologySection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-dark dark:to-black relative overflow-hidden">
      {/* Efectos de iluminación violeta */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* Líneas decorativas */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl"></div>
              <span className="relative px-6 py-2.5 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full text-primary text-sm font-bold tracking-widest">
                ⬢ INNOVACIÓN TECNOLÓGICA ⬢
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Tecnología de <span className="font-bold">Última Generación</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-accent"></div>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-accent to-accent"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Equipamiento LED avanzado y control digital para resultados perfectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-tech p-8 backdrop-blur-sm bg-white dark:bg-gradient-to-br dark:from-gray/50 dark:to-black/50 h-full relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 ${index % 2 === 0 ? 'from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent' : 'from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent'}`}></div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300 ${index % 2 === 0 ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'}`}>
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors ${index % 2 === 0 ? 'group-hover:text-accent' : 'group-hover:text-primary'}`}>{tech.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{tech.description}</p>
                  
                  {/* Indicador de hover */}
                  <div className={`mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? 'text-accent' : 'text-primary'}`}>
                    <div className={`h-px w-8 ${index % 2 === 0 ? 'bg-accent' : 'bg-primary'}`}></div>
                    <span className="text-sm font-semibold">Más información</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-6 card-tech">
            <p className="text-gray-300 mb-4">
              <span className="text-primary font-semibold">LED Technology</span> - Reducción del 60% en consumo energético
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Alta uniformidad
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Mayor definición
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Eco-friendly
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
