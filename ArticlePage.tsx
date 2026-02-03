
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { CalendarDaysIcon, TagIcon, UserCircleIcon, LockClosedIcon, ShareIcon, BookmarkIcon, ArrowLeftIcon, ExclamationTriangleIcon } from '../components/IconComponents';
import { CATEGORIES } from '../constants';

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const newsContext = useContext(NewsContext);

  if (!newsContext) {
    return <div className="text-red-500 p-4">Error: NewsContext no está disponible.</div>;
  }

  const { articles, loading, error } = newsContext;
  
  if (loading && articles.length === 0) {
    return <LoadingSpinner message="Cargando artículo..." />;
  }
  
  const article = articles.find(art => art.id === articleId);

  if (error && !article) {
     return (
      <div className="flex flex-col items-center justify-center text-red-600 bg-red-50 p-6 rounded-lg shadow max-w-2xl mx-auto my-10">
        <ExclamationTriangleIcon className="h-12 w-12 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Error al cargar el artículo</h2>
        <p className="text-center">{error}</p>
        <p className="mt-4 text-sm">El artículo solicitado no pudo ser cargado. Por favor, <Link to="/" className="text-sky-600 hover:underline">vuelve al inicio</Link>.</p>
      </div>
    );
  }

  if (!article) {
    // After loading, if article not found, display a message
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4 max-w-2xl mx-auto">
        <ExclamationTriangleIcon className="h-16 w-16 mx-auto text-yellow-500 mb-6" />
        <h2 className="text-3xl font-semibold text-slate-700 mb-3">Artículo no encontrado</h2>
        <p className="text-slate-600 mb-8">
          Lo sentimos, el artículo que estás buscando no existe o ha sido movido.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
        >
          <ArrowLeftIcon className="mr-2 h-5 w-5" />
          Volver a la página principal
        </Link>
      </div>
    );
  }

  const categoryDetails = CATEGORIES.find(c => c.id === article.category);
  const categoryDisplayName = categoryDetails ? categoryDetails.name : article.category.charAt(0).toUpperCase() + article.category.slice(1);

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 max-w-4xl mx-auto">
      <Link to={article.category === 'general' ? '/' : `/category/${article.category}`} className="inline-flex items-center text-sky-600 hover:text-sky-800 mb-6 transition-colors group">
        <ArrowLeftIcon className="h-5 w-5 mr-2 transform transition-transform group-hover:-translate-x-1" />
        Volver a {categoryDisplayName}
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-sky-800 mb-4">{article.title}</h1>
      
      <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-x-4 gap-y-2">
        <div className="flex items-center">
          <CalendarDaysIcon className="h-5 w-5 mr-1.5 text-sky-500" />
          <span>{article.date}</span>
        </div>
        <div className="flex items-center">
          <UserCircleIcon className="h-5 w-5 mr-1.5 text-sky-500" />
          <span>Fuente: {article.source}</span>
        </div>
        <div className="flex items-center">
          <TagIcon className="h-5 w-5 mr-1.5 text-sky-500" />
          <span>Categoría: {categoryDisplayName}</span>
        </div>
        {article.isPremium && (
          <div className="flex items-center text-yellow-600 font-semibold bg-yellow-50 px-2 py-0.5 rounded-full">
            <LockClosedIcon className="h-4 w-4 mr-1.5 text-yellow-500" />
            <span>Contenido Premium</span>
          </div>
        )}
      </div>

      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-6 shadow-md" />
      )}

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed selection:bg-sky-100 selection:text-sky-800">
        {article.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-end space-x-3">
        <button 
          title="Guardar (funcionalidad no implementada)"
          aria-label="Guardar artículo (funcionalidad no implementada)"
          className="p-2.5 text-gray-500 hover:text-sky-600 transition-colors rounded-full hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
          onClick={() => alert('Guardar artículo (no implementado)')}
        >
          <BookmarkIcon className="h-6 w-6" />
        </button>
        <button 
          title="Compartir (funcionalidad no implementada)"
          aria-label="Compartir artículo (funcionalidad no implementada)"
          className="p-2.5 text-gray-500 hover:text-sky-600 transition-colors rounded-full hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-1"
          onClick={() => alert('Compartir artículo (no implementado)')}
        >
          <ShareIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ArticlePage;
