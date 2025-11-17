"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Packaging premium para alimentos",
    description: "Plancha HD + control de color + pruebas contractuales = reducción del 37% en rechazos.",
    category: "Alimentos",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    result: "+37% calidad",
  },
  {
    title: "Rebranding de marca masiva",
    description: "Más de 120 SKU entregados en tiempo récord con consistencia cromática garantizada.",
    category: "Retail",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    result: "120+ SKU",
  },
  {
    title: "Optimización flexográfica para imprenta",
    description: "Ajuste técnico y calibración que aumentó un 22% la velocidad de máquina.",
    category: "Optimización",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    result: "+22% velocidad",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="relative section-padding bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-dark dark:to-black text-gray-900 dark:text-white overflow-hidden">
      {/* Efectos de fondo tecnológicos */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,49,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,49,119,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-accent/10 border border-accent/40 rounded-full text-accent-dark dark:text-accent text-sm font-bold tracking-wider">
              ⬢ CASOS DE ÉXITO ⬢
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Proyectos <span className="text-primary font-bold">Destacados</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <div className="h-1.5 w-1.5 bg-accent rounded-full"></div>
            <div className="h-px w-8 bg-primary"></div>
            <div className="h-1.5 w-1.5 bg-accent rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Resultados comprobados que respaldan nuestro liderazgo tecnológico
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gradient-to-br dark:from-gray-dark dark:to-black rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500"
            >
              {/* Efecto de brillo superior */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              {/* Contenido */}
              <div className="p-8 relative z-10">
                {/* Icono y badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-primary group-hover:scale-110 group-hover:text-primary-light transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 bg-primary/10 backdrop-blur-sm text-primary text-xs font-bold rounded-full border border-primary/30">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Métrica de resultado */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-primary font-bold text-lg">
                    {item.result}
                  </div>
                  <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Ver más</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Barra de progreso decorativa inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-dark overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="h-full bg-gradient-to-r from-accent via-primary to-accent-light shadow-glow"
                ></motion.div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-bold rounded-lg hover:shadow-glow-accent transition-all duration-300 hover:scale-105 border border-accent-light group"
          >
            <span>Explorar todos los proyectos</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
