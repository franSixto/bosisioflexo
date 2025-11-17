"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white dark:bg-black text-gray-900 dark:text-white section-padding pt-32 overflow-hidden">
      {/* Fondo tecnológico animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-gray-50 dark:from-black dark:via-primary/5 dark:to-black"></div>
      
      {/* Grid tecnológico de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,49,119,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(108,49,119,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Efectos de luz violeta */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(108,49,119,0.15),transparent_40%)]"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 bg-accent/10 border border-accent/40 rounded-md text-accent-dark dark:text-accent text-sm font-semibold">
                ◆ Tecnología de Precisión
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluciones integrales de <span className="text-primary font-bold">packaging</span> y 
              fotopolímeros digitales
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
            
            <p className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
              Más de 30 años de experiencia con tecnología LED Full HD y especialistas en flexografía.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="btn-primary text-center group">
                <span className="flex items-center justify-center gap-2">
                  Solicitar presupuesto
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                Ver servicios
              </Link>
            </div>

            {/* Stats inline */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-primary text-2xl font-bold mb-1">30+</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">Años</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-2xl font-bold mb-1">LED</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">Tech</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-2xl font-bold mb-1">Full HD</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">Digital</div>
              </div>
              <div className="text-center">
                <div className="text-primary text-2xl font-bold mb-1">24hs</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs">Respuesta</div>
              </div>
            </div>
          </motion.div>

          {/* Galería de imágenes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Imagen 1 - Maquinaria flexográfica */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/30 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-semibold">Maquinaria de última generación</p>
                </div>
              </motion.div>

              {/* Imagen 2 - Fotopolímeros */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-primary/30 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-semibold">Fotopolímeros Full HD</p>
                </div>
              </motion.div>

              {/* Imagen 3 - Control de calidad */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/30 to-primary/20 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-semibold">Control de calidad</p>
                </div>
              </motion.div>

              {/* Imagen 4 - Packaging final */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/40 transition-all group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary-light/20 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-semibold">Packaging premium</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
