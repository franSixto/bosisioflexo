import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }
  
  return {
    title: `${post.title} - Blog Bosisio Flexo`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="pt-20">
      <article>
        <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container-custom max-w-4xl">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-blue-100 hover:text-white transition-colors"
              >
                ← Volver al blog
              </Link>
            </div>
            <div className="inline-block bg-secondary text-white text-sm px-3 py-1 rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-blue-100">
              <span>{post.author}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-AR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-gray-600
                prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.content.split('\n').map(line => {
                if (line.startsWith('## ')) {
                  return `<h2>${line.substring(3)}</h2>`;
                } else if (line.startsWith('### ')) {
                  return `<h3>${line.substring(4)}</h3>`;
                } else if (line.startsWith('- ')) {
                  return `<li>${line.substring(2)}</li>`;
                } else if (line.trim() === '') {
                  return '<br />';
                } else {
                  return `<p>${line}</p>`;
                }
              }).join('') }}
            />
          </div>
        </section>

        <section className="section-padding bg-gray-light">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nuestro equipo técnico está listo para asesorarte
            </p>
            <Link href="/contact" className="btn-primary">
              Contáctanos
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
