export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-light">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Página no encontrada</h2>
        <p className="text-xl text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <a href="/" className="btn-primary">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}
