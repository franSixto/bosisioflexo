# Bosisio Flexo S.A. - Website Corporativo

Sitio web corporativo desarrollado con Next.js 15, TypeScript y Tailwind CSS para Bosisio Flexo S.A., proveedor líder de packaging, preprensa y fotopolímeros digitales.

## 🚀 Características

- ✅ Next.js 15 con App Router
- ✅ TypeScript para type-safety
- ✅ Tailwind CSS para estilos
- ✅ Framer Motion para animaciones
- ✅ SEO optimizado (metadata, sitemap, robots.txt)
- ✅ Formulario de contacto con API Route
- ✅ Blog con rutas dinámicas
- ✅ Diseño responsive y moderno
- ✅ Server Components por defecto
- ✅ Optimización de imágenes con next/image

## 📂 Estructura del Proyecto

```
bosissio/
├── app/
│   ├── about/              # Página Quiénes Somos
│   ├── api/
│   │   └── contact/        # API Route para formulario
│   ├── blog/
│   │   ├── [slug]/         # Rutas dinámicas de artículos
│   │   └── page.tsx        # Lista de artículos
│   ├── contact/            # Página de contacto
│   ├── portfolio/          # Casos de éxito
│   ├── services/           # Página de servicios
│   ├── technology/         # Tecnología y calidad
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   ├── not-found.tsx       # Página 404
│   ├── robots.ts           # Configuración robots.txt
│   └── sitemap.ts          # Sitemap XML
├── components/
│   ├── BlogPreview.tsx     # Preview de blog en home
│   ├── ContactForm.tsx     # Formulario de contacto
│   ├── Footer.tsx          # Footer del sitio
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navegación principal
│   ├── PortfolioPreview.tsx # Preview de portfolio
│   ├── ServicesGrid.tsx    # Grid de servicios
│   ├── TechnologySection.tsx # Sección tecnología
│   └── WhyChooseUs.tsx     # Por qué elegirnos
├── lib/
│   └── blog.ts             # Datos y utilidades del blog
├── public/
│   └── assets/             # Imágenes y recursos
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar producción
npm start
```

## 🎨 Colores del Brand

- **Primary (Azul industrial)**: #1e3a8a
- **Secondary (Naranja acento)**: #f97316
- **Accent (Verde)**: #22c55e
- **Graphite**: #374151

## 📄 Páginas Implementadas

1. **Inicio (/)** - Hero, servicios, tecnología, casos de éxito, blog preview
2. **Quiénes Somos (/about)** - Historia, misión, valores
3. **Servicios (/services)** - Detalle completo de todos los servicios
4. **Tecnología (/technology)** - Tecnología LED, control digital, estándares
5. **Casos de Éxito (/portfolio)** - Proyectos destacados con resultados
6. **Blog (/blog)** - Artículos sobre la industria
7. **Contacto (/contact)** - Formulario con validación y API

## 🔧 Configuración

### Logo
Coloca el logo en `/public/assets/logo.png`

### Dominio
Actualiza el dominio en:
- `/app/sitemap.ts`
- `/app/robots.ts`

### Email y Teléfono
Actualiza los datos de contacto en:
- `/components/Footer.tsx`
- `/app/contact/page.tsx`

### Integración de Email
Para enviar emails reales, integra un servicio en `/app/api/contact/route.ts`:
- SendGrid
- Mailgun
- Resend
- Nodemailer con SMTP

## 📱 SEO

El sitio incluye:
- Metadata optimizada en cada página
- Open Graph tags para redes sociales
- Sitemap XML generado automáticamente
- Robots.txt configurado
- URLs amigables
- Imágenes optimizadas

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Otros proveedores
El sitio puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Contenido

Todo el contenido está basado en las especificaciones provistas:
- Textos corporativos
- Servicios detallados
- Casos de uso
- Artículos de blog
- Información técnica

## 🔄 Próximos pasos sugeridos

1. Reemplazar placeholders de imágenes con fotos reales
2. Integrar servicio de email para formulario de contacto
3. Configurar analytics (Google Analytics, Plausible, etc.)
4. Añadir más casos de éxito con imágenes reales
5. Expandir el blog con más artículos
6. Integrar chat en vivo (opcional)
7. Configurar dominio personalizado

## 📞 Soporte

Para cualquier consulta sobre el sitio web, contactar a través de los canales establecidos.

---

**Bosisio Flexo S.A.** - Soluciones integrales de packaging y fotopolímeros digitales
