"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Tendencias en packaging flexográfico para 2026",
    excerpt: "Descubre las innovaciones que están transformando la industria del packaging.",
    date: "2025-11-10",
    slug: "tendencias-packaging-flexografico-2026",
    category: "Tendencias",
  },
  {
    title: "Fotopolímeros digitales: qué son y por qué elevan la impresión",
    excerpt: "Todo lo que necesitas saber sobre la tecnología que revoluciona la flexografía.",
    date: "2025-11-05",
    slug: "fotopolimeros-digitales-que-son",
    category: "Tecnología",
  },
  {
    title: "Cómo mejorar el control de color en tiradas largas",
    excerpt: "Estrategias probadas para mantener la consistencia cromática en producción.",
    date: "2025-10-28",
    slug: "control-color-tiradas-largas",
    category: "Técnicas",
  },
];

export default function BlogPreview() {
  return (
    <section className="relative section-padding bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden">
      {/* Grid tecnológico de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,49,119,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,49,119,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
      
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
              ⬢ CONOCIMIENTO & ACTUALIZACIONES ⬢
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Blog & <span className="text-primary font-bold">Noticias</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
            <div className="h-px w-8 bg-primary"></div>
            <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tendencias tecnológicas y conocimientos especializados de la industria
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gradient-to-br dark:from-gray-dark dark:to-black rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500"
            >
              {/* Línea superior brillante */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              
              <div className="p-6">
                {/* Badge de categoría */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 backdrop-blur-sm text-primary text-xs font-bold rounded-full border border-primary/30">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-AR', { 
                      day: '2-digit',
                      month: 'short'
                    })}
                  </span>
                </div>
                
                {/* Título */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{post.excerpt}</p>
                
                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-4"></div>
                
                {/* Footer con fecha y CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString('es-AR', { 
                      year: 'numeric', 
                      month: 'long'
                    })}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all"
                  >
                    <span>Leer más</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </motion.article>
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
            href="/blog" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105 border border-primary-light group"
          >
            <span>Ver todos los artículos</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
