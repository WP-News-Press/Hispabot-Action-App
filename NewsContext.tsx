
import React, { createContext, useState, useCallback, ReactNode } from 'react';
import type { NewsArticle } from '../types';
import { generateNewsArticles } from '../services/geminiService';
import { CATEGORIES, ARTICLES_TO_GENERATE_PER_CATEGORY, ARTICLES_TO_GENERATE_FOR_SPECIFIC_CAT } from '../constants';

interface NewsContextType {
  articles: NewsArticle[];
  loading: boolean;
  error: string | null;
  targetSite: string | null;
  setTargetSite: (site: string) => void;
  fetchInitialArticles: () => Promise<void>;
  fetchArticlesForCategory: (categoryName: string, categoryId: string) => Promise<void>;
}

export const NewsContext = createContext<NewsContextType | undefined>(undefined);

interface NewsProviderProps {
  children: ReactNode;
}

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [targetSite, setTargetSite] = useState<string | null>(null);

  const fetchInitialArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let allNewArticles: NewsArticle[] = [];
      
      // Categoría general
      const generalCategory = CATEGORIES.find(c => c.id === 'general');
      if (generalCategory) {
          const generalArticles = await generateNewsArticles(generalCategory.name, generalCategory.id, ARTICLES_TO_GENERATE_PER_CATEGORY, targetSite);
          allNewArticles = [...allNewArticles, ...generalArticles];
      }

      // Otras categorías (en paralelo o secuencial para evitar límites)
      for (const category of CATEGORIES) {
        if (category.id !== 'general') {
          if (!articles.some(art => art.category === category.id)) {
             const categoryArticles = await generateNewsArticles(category.name, category.id, ARTICLES_TO_GENERATE_FOR_SPECIFIC_CAT, targetSite);
             allNewArticles = [...allNewArticles, ...categoryArticles];
          }
        }
      }
      
      setArticles(prevArticles => {
        const combined = [...prevArticles, ...allNewArticles];
        return combined.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id);
            if (!x) { return acc.concat([current]); } else { return acc; }
        }, [] as NewsArticle[]);
      });

    } catch (err) {
      console.error("Error fetching initial articles:", err);
      setError((err as Error).message || "Error al cargar noticias.");
    } finally {
      setLoading(false);
    }
  }, [targetSite]);

  const fetchArticlesForCategory = useCallback(async (categoryName: string, categoryId: string) => {
    if (articles.some(article => article.category === categoryId && article.source !== "Hispabot Mock Data")) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const newArticles = await generateNewsArticles(categoryName, categoryId, ARTICLES_TO_GENERATE_FOR_SPECIFIC_CAT, targetSite);
      setArticles(prevArticles => {
        const combined = [...prevArticles.filter(a => a.category !== categoryId), ...newArticles];
         return combined.reduce((acc, current) => { 
            const x = acc.find(item => item.id === current.id);
            if (!x) { return acc.concat([current]); } else { return acc; }
        }, [] as NewsArticle[]);
      });
    } catch (err) {
      setError((err as Error).message || `Error al cargar noticias de ${categoryName}.`);
    } finally {
      setLoading(false);
    }
  }, [articles, targetSite]);


  return (
    <NewsContext.Provider value={{ articles, loading, error, targetSite, setTargetSite, fetchInitialArticles, fetchArticlesForCategory }}>
      {children}
    </NewsContext.Provider>
  );
};
