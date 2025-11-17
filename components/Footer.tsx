import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black-light border-t border-gray-300 dark:border-primary/20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            {/* Logo para tema claro */}
            <Image
              src="/assets/logo-dark.png"
              alt="Bosisio Flexo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 dark:hidden"
            />
            {/* Logo para tema oscuro */}
            <Image
              src="/assets/logo.png"
              alt="Bosisio Flexo"
              width={180}
              height={60}
              className="h-12 w-auto mb-4 hidden dark:block brightness-110"
            />
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Soluciones integrales de packaging, preprensa y fotopolímeros digitales.
              Tecnología de última generación y más de 30 años de experiencia.
            </p>
            <div className="flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-accent to-transparent"></div>
              <span className="text-accent dark:text-accent-light text-sm font-semibold">Premium Tech Solutions</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Tecnología
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Contacto</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@bosisioflexo.com.ar" className="hover:text-accent transition-colors">
                  info@bosisioflexo.com.ar
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+541100000000" className="hover:text-accent transition-colors">
                  +54 11 0000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-primary/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Bosisio Flexo S.A. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Powered by</span>
              <span className="text-primary font-semibold">Premium Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
