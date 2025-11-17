"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Preprensa & Gestión de Proyectos",
    description: "Transformamos diseños en archivos técnicamente listos para impresión.",
    features: [
      "Ajustes técnicos",
      "Trapping y reticulados",
      "Separación de color precisa",
      "Pruebas contractuales",
      "Control de calidad automatizado",
    ],
    benefits: [
      "Menos errores",
      "Flujos más rápidos",
      "Resultados fieles",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Fotopolímeros Digitales Full HD",
    description: "Planchas flexográficas digitales de alta definición y durabilidad.",
    features: [
      "Laminación digital",
      "Exposición LED",
      "Revelado optimizado",
      "Control de superficie",
      "Certificación de calidad",
    ],
    benefits: [
      "Mayor detalle",
      "Mejor transferencia",
      "Máxima consistencia",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: "from-primary/15 to-primary/5",
  },
  {
    title: "Gestión de Color & Control",
    description: "Aseguramos que lo diseñado es lo que se imprime.",
    features: [
      "Perfiles ICC",
      "Curvas para sustratos",
      "Control espectrofotométrico",
      "Pruebas certificadas",
    ],
    benefits: [
      "Consistencia garantizada",
      "Reducción de desperdicios",
      "Optimización de tintas",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        <circle cx="17" cy="7" r="3" strokeWidth={1.5} />
      </svg>
    ),
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Asesoramiento Técnico",
    description: "Optimizamos procesos para imprentas y marcas.",
    features: [
      "Asistencia en planta",
      "Calibración de máquinas",
      "Resolución de problemas",
      "Recomendaciones técnicas",
    ],
    benefits: [
      "Mejor rendimiento",
      "Optimización de recursos",
      "Capacitación continua",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-primary/15 to-primary/5",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-white dark:bg-black relative overflow-hidden">
      {/* Grid de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,49,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,49,119,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-6 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-bold tracking-wider">
              ⬢ SOLUCIONES TECNOLÓGICAS AVANZADAS ⬢
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Servicios <span className="text-primary font-bold">Premium</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
            <div className="h-px w-8 bg-primary"></div>
            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Tecnología de vanguardia para líderes de la industria flexográfica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`card-tech p-8 h-full bg-gradient-to-br ${service.gradient} backdrop-blur-sm`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-primary group-hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary"></span>
                      Incluye:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-primary mt-0.5">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary"></span>
                      Beneficios:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-primary text-sm font-medium flex items-start gap-2">
                          <span className="mt-0.5">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span className="text-sm font-semibold">Ver detalles</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            Ver todos los servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
