"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg shadow-primary/10 z-50 border-b border-gray-200 dark:border-primary/20 transition-colors">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative">
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 blur-xl transition-all duration-500 rounded-full"></div>
            {/* Logo para tema claro */}
            <Image
              src="/assets/logo-dark.png"
              alt="Bosisio Flexo"
              width={180}
              height={60}
              className="h-12 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(108,49,119,0.6)] relative z-10 dark:hidden"
              priority
            />
            {/* Logo para tema oscuro */}
            <Image
              src="/assets/logo.png"
              alt="Bosisio Flexo"
              width={180}
              height={60}
              className="h-12 w-auto transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(108,49,119,0.6)] relative z-10 hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium relative group">
              Quiénes Somos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium relative group">
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/technology" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium relative group">
              Tecnología
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/portfolio" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium relative group">
              Casos de Éxito
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/blog" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium relative group">
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <ThemeToggle />
            <Link href="/contact" className="btn-primary">
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-gray-800 dark:text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 dark:border-primary/20 mt-2">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/about" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium">
                Quiénes Somos
              </Link>
              <Link href="/services" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium">
                Servicios
              </Link>
              <Link href="/technology" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium">
                Tecnología
              </Link>
              <Link href="/portfolio" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium">
                Casos de Éxito
              </Link>
              <Link href="/blog" className="text-gray-800 dark:text-white hover:text-primary transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="btn-primary inline-block text-center">
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
