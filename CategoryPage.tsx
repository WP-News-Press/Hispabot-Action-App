
import React, { useContext, useMemo, useState } from 'react';
import type { Category as CategoryType, NewsArticle } from '../types';
import { NewsContext } from '../context/NewsContext';
import NewsCard from '../components/NewsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import SearchBar from '../components/SearchBar';
import { useDebounce } from '../hooks/useDebounce';
import { ExclamationTriangleIcon } from '../components/IconComponents';

interface CategoryPageProps {
  category: CategoryType;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ category }) => {
  const newsContext = useContext(NewsContext);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  if (!newsContext) {
    return <div className="text-red-500 p-4">Error: NewsContext no está disponible.</div>;
  }
  
  const { articles, loading, error } = newsContext;

  const categoryArticles = useMemo(() => {
    return articles.filter(article => article.category === category.id);
  }, [articles, category.id]);

  const filteredArticles = useMemo(() => {
    if (!debouncedSearchTerm) return categoryArticles;
    return categoryArticles.filter(article =>
      article.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [categoryArticles, debouncedSearchTerm]);


  if (loading && categoryArticles.length === 0) {
    return <LoadingSpinner message={`Cargando noticias de ${category.name}...`} />;
  }
  
  if (error && categoryArticles.length === 0) { // Only show full page error if no articles for this cat were loaded before error
     return (
      <div className="flex flex-col items-center justify-center text-red-600 bg-red-50 p-6 rounded-lg shadow">
        <ExclamationTriangleIcon className="h-12 w-12 mb-4" />
        <h2 className="text-xl font-semibold mb-2">Error al cargar noticias de {category.name}</h2>
        <p>{error}</p>
        <p className="mt-2 text-sm">Por favor, inténtalo de nuevo más tarde.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-sky-700 mb-2">{category.name}</h1>
        <p className="text-lg text-slate-600">Noticias e información relevante sobre {category.name.toLowerCase()}.</p>
      </header>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} placeholder={`Buscar en ${category.name}...`} />
      
      {error && <div className="text-center text-red-500 p-2 bg-red-100 rounded">Hubo un error al actualizar: {error}</div>}


      {filteredArticles.length === 0 && !loading && (
        <div className="text-center text-slate-500 py-10">
          <p className="text-xl">No se encontraron noticias en la categoría "{category.name}".</p>
          {debouncedSearchTerm && <p>Intenta con otros términos de búsqueda.</p>}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article: NewsArticle) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
      {loading && categoryArticles.length > 0 && <LoadingSpinner message={`Actualizando noticias de ${category.name}...`} />}
    </div>
  );
};

export default CategoryPage;
