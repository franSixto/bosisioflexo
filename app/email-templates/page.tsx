import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Email Templates - Bosisio Flexo",
  robots: {
    index: false,
    follow: false,
  },
};

const emailTemplates = [
  {
    id: "invitacion-evento",
    name: "Invitación a Evento",
    description: "Template para invitaciones a eventos corporativos",
    file: "/invitacion-evento.html",
  },
];

export default function EmailTemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Templates de Email
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Vista previa de templates de email para campañas de marketing
          </p>

          <div className="grid gap-6">
            {emailTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {template.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {template.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={template.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Ver Template
                  </a>
                  <a
                    href={template.file}
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Descargar HTML
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Información
            </h3>
            <p className="text-blue-800 dark:text-blue-200">
              Estos templates están pre-procesados con las URLs del dominio actual.
              Para generar nuevas versiones con diferentes dominios, usa el comando:{" "}
              <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                npm run generate-email
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
