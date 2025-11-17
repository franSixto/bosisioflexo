# Configuración de Variables de Entorno

## Archivos de Entorno

- `.env.example` - Template con todas las variables disponibles
- `.env.local` - Variables para desarrollo local (no se sube a git)
- Variables de Vercel - Configuradas en el dashboard para producción

## Variables Disponibles

### NEXT_PUBLIC_DOMAIN_URL
**Requerida para:** Generación de templates de email

Dominio base de la aplicación sin trailing slash.

- **Desarrollo:** `http://localhost:3000`
- **Producción:** `https://bosisioflexo.vercel.app`

## Configuración para Desarrollo

1. Copia el archivo de ejemplo:
```bash
cp .env.example .env.local
```

2. Edita `.env.local` con tus valores locales

## Configuración para Producción (Vercel)

1. Ve al dashboard de tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las siguientes variables:

| Variable | Valor |
|----------|-------|
| `NEXT_PUBLIC_DOMAIN_URL` | `https://tudominio.vercel.app` |

4. Redeploy el proyecto para aplicar los cambios

## Uso en Templates de Email

Para generar templates con las URLs correctas:

```bash
# Usa el dominio de .env.local
npm run generate-email

# Especifica template y nombre de salida
npm run generate-email invitacion-evento mi-invitacion
```

El archivo generado estará en `public/` con todas las variables reemplazadas.
