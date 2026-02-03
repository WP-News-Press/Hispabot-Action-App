
import React from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon, SparklesIcon } from '../components/IconComponents';

const PremiumPlaceholderPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4">
      <LockClosedIcon className="h-20 w-20 text-yellow-500 mb-6" />
      <h1 className="text-4xl font-bold text-sky-700 mb-4">Funcionalidad Premium</h1>
      <p className="text-xl text-slate-600 mb-8 max-w-2xl">
        Esta sección, como el "Análisis de Tendencias", está reservada para nuestros suscriptores Premium. 
        Con la suscripción Premium, obtendrás acceso a análisis exclusivos, resúmenes detallados y notificaciones personalizadas.
      </p>
      <div className="bg-sky-50 p-6 rounded-lg shadow-md border border-sky-200 max-w-md">
        <h2 className="text-2xl font-semibold text-sky-600 mb-3 flex items-center justify-center">
          <SparklesIcon className="h-7 w-7 mr-2 text-yellow-500" />
          Beneficios Premium
        </h2>
        <ul className="list-disc list-inside text-left text-slate-700 space-y-1">
          <li>Análisis de tendencias profundos.</li>
          <li>Resúmenes generados por IA.</li>
          <li>Archivo histórico completo de noticias.</li>
          <li>Notificaciones personalizadas sobre temas de tu interés.</li>
          <li>Experiencia sin anuncios (próximamente).</li>
        </ul>
      </div>
      <Link
        to="/"
        className="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
      >
        Volver a la página principal
      </Link>
    </div>
  );
};

export default PremiumPlaceholderPage;
