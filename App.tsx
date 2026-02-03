
import React, { useEffect, useContext, useMemo } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import ChatWidget from './components/ChatWidget';
import { NewsContext } from './context/NewsContext';
import { APP_NAME, CATEGORIES, VERIFIER_PATH } from './constants';
import PremiumPlaceholderPage from './pages/PremiumPlaceholderPage';
import VerifierPage from './pages/VerifierPage';

const AppContent: React.FC = () => {
  const newsContext = useContext(NewsContext);
  const location = useLocation();

  if (!newsContext) {
    throw new Error("NewsContext must be used within a NewsProvider");
  }
  const { fetchInitialArticles, setTargetSite } = newsContext;

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const isEmbedded = queryParams.get('embed') === 'true';
  const siteParam = queryParams.get('site');

  useEffect(() => {
    if (siteParam) {
      setTargetSite(siteParam);
    }
    fetchInitialArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteParam]);

  return (
    <div className={`flex flex-col min-h-screen bg-slate-50 text-slate-800 ${isEmbedded ? 'p-0' : ''}`}>
      {!isEmbedded && <Navbar title={APP_NAME} categories={CATEGORIES} />}
      <main className={`flex-grow container mx-auto ${isEmbedded ? 'px-2 py-4 max-w-full' : 'px-4 py-8'}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {CATEGORIES.map(category => (
            <Route 
              key={category.id} 
              path={`/category/${category.id}`} 
              element={<CategoryPage category={category} />} 
            />
          ))}
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/analisis-premium" element={<PremiumPlaceholderPage />} />
          <Route path={VERIFIER_PATH} element={<VerifierPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {!isEmbedded && <Footer />}
      {/* El Chat de Hispabot está siempre disponible */}
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
