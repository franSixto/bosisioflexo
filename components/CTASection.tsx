import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "¿Listo para comenzar tu proyecto?",
  description = "Nuestro equipo técnico está listo para asesorarte y encontrar la mejor solución para tus necesidades",
  buttonText = "Solicitar presupuesto",
  buttonHref = "/contact"
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,49,119,0.3),transparent_70%)]"></div>
      <div className="container-custom text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Link 
          href={buttonHref}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:shadow-glow-accent transition-all duration-300 hover:scale-105 border-2 border-white/20 hover:border-accent group"
        >
          <span>{buttonText}</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
