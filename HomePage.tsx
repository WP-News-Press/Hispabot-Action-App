import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import type { Category as CategoryType, NewsArticle } from '../types';
import { CATEGORIES, PREMIUM_CATEGORY_ID } from '../constants';
import NewsCard from '../components/NewsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import { useDebounce } from '../hooks/useDebounce';
import { ExclamationTriangleIcon, NewspaperIcon, LockClosedIcon, UserCircleIcon, CalendarDaysIcon, SparklesIcon as SectionTitleIcon } from '../components/IconComponents';

const MAX_KIOSK_HEADLINES = 3;

const HomePage: React.FC = () => {
  const newsContext = useContext(NewsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  if (!newsContext) {
    return <div className="text-red-500 p-4">Error: NewsContext no está disponible.</div>;
  }

  const { articles, loading, error } = newsContext;

  const generalArticles = useMemo(() => {
    return articles.filter(article => article.category === 'general');
  }, [articles]);

  const kioskHeadlines = useMemo(() => {
    if (!debouncedSearchTerm) {
      return generalArticles.slice(0, MAX_KIOSK_HEADLINES);
    }
    return [];
  }, [generalArticles, debouncedSearchTerm]);

  const articlesForMainGrid = useMemo(() => {
    const articlesToFilter = generalArticles;
    if (debouncedSearchTerm) {
      return articlesToFilter.filter(article =>
        article.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
    }
    return articlesToFilter.slice(MAX_KIOSK_HEADLINES);
  }, [generalArticles, debouncedSearchTerm]);

  const topicCategories = useMemo(() => {
    return CATEGORIES.filter(cat => cat.id !== 'general' && cat.id !== PREMIUM_CATEGORY_ID);
  }, []);

  const isLoadingFirstTime = loading && articles.length === 0;
  const isUpdating = loading && articles.length > 0;

  if (isLoadingFirstTime) {
    return <LoadingSpinner message="Cargando noticias destacadas..." />;
  }

  if (error && generalArticles.length === 0 && topicCategories.length === 0) { // Broader check for initial error
    return (
      <div className="flex flex-col items-center justify-center text-red-600 bg-red-50 p-6 rounded-lg shadow">
        <ExclamationTriangleIcon className="h-12 w-12 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Error al cargar noticias</h2>
        <p>{error}</p>
        <p className="mt-2 text-sm">Por favor, inténtalo de nuevo más tarde.</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-700 mb-2">Noticias Destacadas</h1>
        <p className="text-lg text-slate-600">Lo último y más relevante para nuestra comunidad.</p>
      </header>

      {kioskHeadlines.length > 0 && !isUpdating && (
        <section aria-labelledby="kiosk-title" className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
          <h2 id="kiosk-title" className="text-3xl font-bold text-sky-700 mb-6 flex items-center">
            <NewspaperIcon className="h-8 w-8 mr-3 text-sky-500" />
            Kiosko de Noticias
          </h2>
          <div className="space-y-6">
            {kioskHeadlines.map(article => (
              <div key={article.id} className="pb-6 border-b border-slate-200 last:border-b-0">
                <Link to={`/article/${article.id}`} className="group block p-1 -m-1 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xl lg:text-2xl font-semibold text-sky-800 group-hover:text-sky-600 transition-colors duration-150">
                      {article.title}
                    </h3>
                    {article.isPremium && (
                      <span className="ml-2 flex-shrink-0 text-xs font-semibold inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300 whitespace-nowrap">
                        <LockClosedIcon className="h-3.5 w-3.5 mr-1" />
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mt-1.5 group-hover:text-slate-700">{article.summary}</p>
                  <div className="text-xs text-slate-500 mt-2.5 flex items-center flex-wrap gap-x-3 gap-y-1">
                    <span className="inline-flex items-center">
                      <UserCircleIcon className="h-4 w-4 mr-1 text-slate-400" /> {article.source}
                    </span>
                    <span className="inline-flex items-center">
                      <CalendarDaysIcon className="h-4 w-4 mr-1 text-slate-400" /> {article.date}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <section aria-labelledby="topic-buttons-title">
        <h2 id="topic-buttons-title" className="text-2xl md:text-3xl font-bold text-sky-700 mb-6 flex items-center">
          <SectionTitleIcon className="h-7 w-7 mr-3 text-sky-500" />
          Explorar por Tema
        </h2>
        {topicCategories.length === 0 && loading && <LoadingSpinner message="Cargando temas..." />}
        {topicCategories.length > 0 && (
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {topicCategories.map((category: CategoryType) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-sky-200/50 hover:scale-105 transform transition-all duration-200 ease-out border border-transparent hover:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                {category.icon && React.createElement(category.icon, { className: "h-10 w-10 sm:h-12 sm:w-12 mb-2 text-sky-600 group-hover:text-sky-700 transition-colors"})}
                <span className="text-sm sm:text-base font-semibold text-center text-slate-700 group-hover:text-sky-700 transition-colors">{category.name}</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder="Buscar en noticias destacadas..." />

        {debouncedSearchTerm && articlesForMainGrid.length > 0 && (
          <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">Resultados de búsqueda:</h2>
        )}
        {!debouncedSearchTerm && kioskHeadlines.length > 0 && articlesForMainGrid.length > 0 && (
          <h2 className="text-2xl font-semibold text-slate-700 mt-8 mb-4">Más Noticias Destacadas:</h2>
        )}

        {articlesForMainGrid.length === 0 && !isUpdating && (
          <div className="text-center text-slate-500 py-10">
            {debouncedSearchTerm ? (
              <>
                <p className="text-xl">No se encontraron noticias para "{debouncedSearchTerm}".</p>
                <p>Intenta con otros términos de búsqueda.</p>
              </>
            ) : (
              kioskHeadlines.length === 0 && <p className="text-xl">No hay noticias destacadas disponibles en este momento.</p> 
            )}
          </div>
        )}

        {articlesForMainGrid.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesForMainGrid.map((article: NewsArticle) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
      {isUpdating && <LoadingSpinner message="Actualizando noticias..." />}
       {error && articles.length > 0 && <div className="mt-4 text-center text-red-500 p-2 bg-red-100 rounded">Hubo un error al actualizar: {error}</div>}
    </div>
  );
};

export default HomePage;