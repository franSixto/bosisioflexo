# Mailings - Bosisio Flexo

Esta carpeta contiene los templates HTML para campañas de email marketing.

## Configuración

### Variables de Entorno

El template usa la variable `{{DOMAIN_URL}}` que debe ser reemplazada con tu dominio.

**Opción 1: Usando el script automático (Recomendado)**

```bash
# Asegúrate de tener configurado NEXT_PUBLIC_DOMAIN_URL en .env.local
npm run generate-email

# O especifica el template y nombre de salida:
npm run generate-email invitacion-evento invitacion-evento-prod
```

**Opción 2: Reemplazo manual con sed**

```bash
# Ejemplo para producción:
sed 's|{{DOMAIN_URL}}|https://bosisioflexo.vercel.app|g' invitacion-evento.html > invitacion-evento-prod.html

# Ejemplo para desarrollo local:
sed 's|{{DOMAIN_URL}}|http://localhost:3000|g' invitacion-evento.html > invitacion-evento-local.html
```

O puedes hacerlo manualmente reemplazando `{{DOMAIN_URL}}` con tu URL.

## Templates Disponibles

### 1. Invitación a Evento (`invitacion-evento.html`)
Template diseñado para invitaciones a eventos corporativos, lanzamientos de productos o presentaciones técnicas.

**Características:**
- Diseño responsive compatible con todos los clientes de email
- Colores corporativos de Bosisio Flexo (#6c3177, #c0c0c0)
- Sección de detalles del evento destacada
- Botón CTA prominente para confirmación
- Lista de beneficios incluidos
- Footer con información de contacto y redes sociales

**Cómo usar:**
1. Configura `NEXT_PUBLIC_DOMAIN_URL` en tu archivo `.env.local`
2. Ejecuta `npm run generate-email` para generar el template con las URLs correctas
3. El archivo procesado estará en `public/invitacion-evento-processed.html`
4. Personaliza los siguientes campos en el template generado:
   - Fecha del evento
   - Hora del evento
   - Ubicación
   - URL del botón de confirmación
   - Lista de beneficios
   - Información de contacto
3. Importa el HTML a tu plataforma de email marketing

**Compatibilidad:**
- Gmail
- Outlook (desktop y web)
- Apple Mail
- Dispositivos móviles

## Mejores Prácticas

1. **Testing:** Siempre prueba los emails en diferentes clientes antes de enviar
2. **Personalización:** Usa variables dinámicas para nombre del destinatario
3. **Links:** Verifica que todos los enlaces funcionen correctamente
4. **Imágenes:** Si agregas imágenes, usa URLs absolutas
5. **Peso:** Mantén el HTML debajo de 100KB para mejor deliverability

## Notas Técnicas

Los templates están diseñados siguiendo las mejores prácticas:
- Uso de tablas para layout (requerido por clientes de email)
- Estilos inline para máxima compatibilidad
- Media queries para responsive design
- Propiedades MSO para Outlook
- Fallbacks para clientes que no soportan ciertas características
