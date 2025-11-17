import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Bosisio Flexo",
  description: "Artículos sobre packaging, flexografía, fotopolímeros digitales y tendencias de la industria gráfica.",
};

export default function BlogPage() {
  const posts = getBlogPosts();
  
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
                ◆ Conocimiento e Insights
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary font-bold">Blog</span> / Noticias
            </h1>
            
            <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent-light mb-6"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Mantente actualizado con las últimas tendencias y conocimientos de la industria
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white dark:bg-gray-dark rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-lg group"
              >
                <div className="p-6">
                  <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary text-sm px-3 py-1 rounded-full mb-3 border border-primary/30">
                    {post.category}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-500 dark:text-gray-500">
                      {new Date(post.date).toLocaleDateString('es-AR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-gray-500 dark:text-gray-500">{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold group-hover:gap-3 transition-all"
                  >
                    <span>Leer más</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
