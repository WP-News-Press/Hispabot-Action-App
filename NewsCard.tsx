
import React from 'react';
import { Link } from 'react-router-dom';
import type { NewsArticle } from '../types';
import { CalendarDaysIcon, TagIcon, UserCircleIcon, LockClosedIcon, ArrowRightIcon } from './IconComponents';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const categoryDisplay = article.category.charAt(0).toUpperCase() + article.category.slice(1);

  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col ${article.isPremium ? 'border-2 border-yellow-500' : 'border border-gray-200'}`}>
      {article.imageUrl && (
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800">
            <TagIcon className="h-4 w-4 mr-1" />
            {categoryDisplay}
          </span>
          {article.isPremium && (
            <span className="text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-full bg-yellow-400 text-yellow-900">
              <LockClosedIcon className="h-4 w-4 mr-1" />
              Premium
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-sky-800 mb-2 hover:text-sky-600 transition-colors">
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{article.summary}</p>
        <div className="text-xs text-gray-500 mb-4">
          <div className="flex items-center mb-1">
            <UserCircleIcon className="h-4 w-4 mr-1 text-gray-400" />
            Fuente: {article.source}
          </div>
          <div className="flex items-center">
            <CalendarDaysIcon className="h-4 w-4 mr-1 text-gray-400" />
            Fecha: {article.date}
          </div>
        </div>
        <Link
          to={`/article/${article.id}`}
          className="mt-auto self-start inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
        >
          Leer Más
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
