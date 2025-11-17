/**
 * Script para generar versiones de templates de email con el dominio correcto
 * Uso: node scripts/generate-email-template.js [template-name] [output-name]
 * Ejemplo: node scripts/generate-email-template.js invitacion-evento invitacion-evento-prod
 */

const fs = require('fs');
const path = require('path');

// Obtener el dominio de las variables de entorno
const domainUrl = process.env.NEXT_PUBLIC_DOMAIN_URL || 'http://localhost:3000';

// Obtener argumentos de línea de comandos
const templateName = process.argv[2] || 'invitacion-evento';
const outputName = process.argv[3] || `${templateName}-processed`;

// Paths
const templatePath = path.join(__dirname, '..', 'mailings', `${templateName}.html`);
const outputPath = path.join(__dirname, '..', 'public', `${outputName}.html`);

try {
  // Leer el template
  let template = fs.readFileSync(templatePath, 'utf8');
  
  // Reemplazar la variable {{DOMAIN_URL}}
  template = template.replace(/\{\{DOMAIN_URL\}\}/g, domainUrl);
  
  // Escribir el archivo procesado
  fs.writeFileSync(outputPath, template);
  
  console.log(`✅ Template generado exitosamente:`);
  console.log(`   Input:  ${templatePath}`);
  console.log(`   Output: ${outputPath}`);
  console.log(`   Domain: ${domainUrl}`);
} catch (error) {
  console.error('❌ Error al generar template:', error.message);
  process.exit(1);
}
