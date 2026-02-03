
import React from 'react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-900 text-sky-200 py-8 text-center">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Un asistente de noticias para la comunidad hispana.</p>
      </div>
    </footer>
  );
};

export default Footer;
