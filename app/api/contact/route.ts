import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, mensaje } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { message: "Por favor completa todos los campos requeridos." },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Por favor ingresa un email válido." },
        { status: 400 }
      );
    }

    // Aquí normalmente enviarías un email o guardarías en una base de datos
    // Por ahora, solo registramos en consola y devolvemos éxito
    console.log("Nuevo mensaje de contacto:", {
      nombre,
      empresa,
      email,
      telefono,
      mensaje,
      fecha: new Date().toISOString(),
    });

    // En producción, podrías integrar con servicios como:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - Nodemailer con SMTP
    
    return NextResponse.json(
      { 
        message: "Mensaje enviado correctamente. Te contactaremos pronto.",
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error procesando formulario de contacto:", error);
    return NextResponse.json(
      { message: "Error al procesar el formulario. Por favor intenta nuevamente." },
      { status: 500 }
    );
  }
}
