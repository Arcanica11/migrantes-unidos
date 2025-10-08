// pages/404.js
import Link from 'next/link'; // Importamos Link para la navegación

export default function Custom404() {
  return (
    <>
      <div className="container">
        <h1 className="title">404</h1>
        <p className="subtitle">Página No Encontrada</p>
        <p className="description">
          Lo sentimos, la página que estás buscando ha sido movida o no existe.
        </p>
        <Link href="/" legacyBehavior>
          <a className="button">Volver al Inicio</a>
        </Link>
      </div>

      {/* Estilos CSS en línea con JSX */}
      <style jsx>{`
        .container {
          background-color: #1a1a1a; /* Fondo oscuro */
          color: #e0e0e0; /* Texto claro */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          text-align: center;
          padding: 20px;
        }

        .title {
          font-size: 120px;
          font-weight: bold;
          margin: 0;
          color: #4a90e2; /* Un toque de color azul moderno */
          text-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
        }

        .subtitle {
          font-size: 28px;
          margin: 10px 0;
          font-weight: 300;
        }

        .description {
          font-size: 18px;
          margin-bottom: 30px;
          max-width: 400px;
        }

        .button {
          background-color: #4a90e2;
          color: #ffffff;
          border: none;
          padding: 12px 25px;
          border-radius: 5px;
          font-size: 16px;
          text-decoration: none;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .button:hover {
          background-color: #357abd;
          transform: translateY(-2px); /* Pequeño efecto al pasar el mouse */
        }
      `}</style>

      {/* Estilo global para el body */}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}