import React, { useState } from 'react';
import { verifyNewsText } from '../services/geminiService';
import type { VerificationResult, VerificationStatus } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';
import { ShieldCheckIcon, ExclamationTriangleIcon, ArrowLeftIcon, CheckCircleIcon, XCircleIcon, QuestionMarkCircleIcon, SparklesIcon } from '../components/IconComponents';

type VerifierStep = "urlInput" | "textInput" | "verifying" | "result";

const VerifierPage: React.FC = () => {
  const [step, setStep] = useState<VerifierStep>("urlInput");
  const [url, setUrl] = useState<string>("");
  const [articleText, setArticleText] = useState<string>("");
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Por favor, ingresa una URL.");
      return;
    }
    try {
        new URL(url); // Basic URL validation
    } catch (_) {
        setError("La URL ingresada no es válida. Asegúrate de que incluya http:// o https://");
        return;
    }
    setError(null);
    setStep("textInput");
  };

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleText.trim()) {
      setError("Por favor, pega el texto del artículo.");
      return;
    }
    setError(null);
    setStep("verifying");
    try {
      const result = await verifyNewsText(articleText);
      setVerificationResult({...result, originalUrl: url, analyzedTextSnippet: articleText.substring(0, 300) + (articleText.length > 300 ? "..." : "")});
      setStep("result");
    } catch (err) {
      setError((err as Error).message || "Ocurrió un error desconocido durante la verificación.");
      setStep("textInput"); // Go back to text input on error
    }
  };

  const handleReset = () => {
    setStep("urlInput");
    setUrl("");
    setArticleText("");
    setVerificationResult(null);
    setError(null);
  };
  
  const getStatusColor = (status: VerificationStatus, type: 'text' | 'bg' | 'border' = 'text'): string => {
    switch (status) {
      case "Potencialmente Verdadera":
        return type === 'text' ? 'text-green-600' : (type === 'bg' ? 'bg-green-100' : 'border-green-500');
      case "Potencialmente Falsa":
        return type === 'text' ? 'text-red-600' : (type === 'bg' ? 'bg-red-100' : 'border-red-500');
      case "Incierto":
        return type === 'text' ? 'text-yellow-600' : (type === 'bg' ? 'bg-yellow-100' : 'border-yellow-500');
      default:
        return type === 'text' ? 'text-slate-600' : (type === 'bg' ? 'bg-slate-100' : 'border-slate-500');
    }
  };

  const StatusIcon = ({ status }: { status: VerificationStatus }) => {
    switch (status) {
      case "Potencialmente Verdadera":
        return <CheckCircleIcon className={`h-6 w-6 mr-2 ${getStatusColor(status)}`} />;
      case "Potencialmente Falsa":
        return <XCircleIcon className={`h-6 w-6 mr-2 ${getStatusColor(status)}`} />;
      case "Incierto":
        return <QuestionMarkCircleIcon className={`h-6 w-6 mr-2 ${getStatusColor(status)}`} />;
      default:
        return null;
    }
  };


  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-6 md:p-10">
      <header className="text-center mb-8">
        <ShieldCheckIcon className="h-16 w-16 mx-auto text-sky-600 mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-sky-700">Verificador de Noticias</h1>
        <p className="text-slate-600 mt-2">Analiza la veracidad de un artículo de noticias utilizando IA.</p>
      </header>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-md" role="alert">
          <div className="flex">
            <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-3" />
            <div>
              <p className="font-bold">Error</p>
              <p>{error}</p>
            </div>
          </div>
        </div>
      )}

      {step === "urlInput" && (
        <form onSubmit={handleUrlSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-1">
              Paso 1: Ingresa la URL del artículo
            </label>
            <input
              type="url"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://ejemplo.com/noticia"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
          >
            Siguiente
          </button>
        </form>
      )}

      {step === "textInput" && (
        <form onSubmit={handleTextSubmit} className="space-y-6">
          <div>
            <p className="text-sm text-slate-700 mb-2">
              URL ingresada: <strong className="text-sky-600 break-all">{url}</strong>
            </p>
            <p className="bg-sky-50 text-sky-700 p-3 rounded-md text-sm mb-3 border border-sky-200">
              <SparklesIcon className="h-5 w-5 inline mr-1 mb-0.5" />
              <strong>Simulación de scraping:</strong> Para verificar la noticia, por favor, copia el texto principal del artículo desde la URL y pégalo en el siguiente campo. La IA analizará el texto que proporciones.
            </p>
            <label htmlFor="articleText" className="block text-sm font-medium text-slate-700 mb-1">
              Paso 2: Pega el texto del artículo aquí
            </label>
            <textarea
              id="articleText"
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}
              rows={10}
              required
              placeholder="Pega aquí el contenido completo del artículo de noticias..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
            />
          </div>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => setStep("urlInput")}
              className="w-1/2 flex items-center justify-center py-3 px-4 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2"/>
              Cambiar URL
            </button>
            <button
              type="submit"
              className="w-1/2 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
            >
              Verificar Texto
            </button>
          </div>
        </form>
      )}

      {step === "verifying" && (
        <LoadingSpinner message="Analizando texto con IA..." />
      )}

      {step === "result" && verificationResult && (
        <div className={`p-6 rounded-lg border-2 ${getStatusColor(verificationResult.status, 'border')} ${getStatusColor(verificationResult.status, 'bg')} space-y-5`}>
          <h2 className="text-2xl font-semibold flex items-center">
            <StatusIcon status={verificationResult.status} />
            Resultado del Análisis: <span className={`ml-2 ${getStatusColor(verificationResult.status)}`}>{verificationResult.status}</span>
          </h2>

          <div className="bg-white/70 p-4 rounded-md shadow">
            <h3 className="font-semibold text-slate-800 mb-1">URL Original:</h3>
            <p className="text-sm text-sky-700 break-all hover:underline">
                <a href={verificationResult.originalUrl} target="_blank" rel="noopener noreferrer">{verificationResult.originalUrl}</a>
            </p>
          </div>
          
          <div className="bg-white/70 p-4 rounded-md shadow">
            <h3 className="font-semibold text-slate-800 mb-1">Explicación de la IA:</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{verificationResult.explanation}</p>
          </div>

          <div className="bg-white/70 p-4 rounded-md shadow">
            <h3 className="font-semibold text-slate-800 mb-1">Nivel de Confianza:</h3>
            <div className="flex items-center">
              <div className="w-full bg-slate-200 rounded-full h-2.5 mr-2">
                <div
                  className={`h-2.5 rounded-full ${getStatusColor(verificationResult.status, 'bg').replace('bg-', 'bg-opacity-100 bg-')}`}
                  style={{ width: `${verificationResult.confidenceScore * 100}%`, backgroundColor: verificationResult.status === 'Potencialmente Verdadera' ? '#16a34a' : verificationResult.status === 'Potencialmente Falsa' ? '#dc2626' : '#f59e0b' }}
                ></div>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(verificationResult.status)}`}>
                {(verificationResult.confidenceScore * 100).toFixed(0)}%
              </span>
            </div>
          </div>

          {verificationResult.keywords && verificationResult.keywords.length > 0 && (
            <div className="bg-white/70 p-4 rounded-md shadow">
              <h3 className="font-semibold text-slate-800 mb-2">Palabras Clave Influyentes:</h3>
              <div className="flex flex-wrap gap-2">
                {verificationResult.keywords.map((keyword, index) => (
                  <span key={index} className="px-2.5 py-1 text-xs font-medium bg-slate-200 text-slate-800 rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {verificationResult.analyzedTextSnippet && (
             <div className="bg-white/70 p-4 rounded-md shadow">
                <h3 className="font-semibold text-slate-800 mb-1">Fragmento del Texto Analizado:</h3>
                <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-200 max-h-24 overflow-y-auto">"{verificationResult.analyzedTextSnippet}"</p>
            </div>
          )}

          <button
            onClick={handleReset}
            className="w-full mt-6 flex items-center justify-center py-3 px-4 border border-sky-600 rounded-md shadow-sm text-sm font-medium text-sky-700 bg-white hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
          >
             <ShieldCheckIcon className="h-4 w-4 mr-2"/>
            Verificar otra URL
          </button>
        </div>
      )}
    </div>
  );
};

export default VerifierPage;