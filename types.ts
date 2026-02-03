import React from 'react';

export interface Category {
  id: string;
  name: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  date: string; // "YYYY-MM-DD"
  category: string; // Category ID
  isPremium?: boolean;
  imageUrl?: string;
  originalUrl?: string;
}

export interface GeminiNewsArticleFormat {
    id: string;
    title: string;
    summary: string; // 1-2 sentences
    content: string; // 2-3 paragraphs
    source: string; // Fictional source name e.g. "Noticias NYC Hispana"
    date: string; // "YYYY-MM-DD"
    category: string; // The category ID it was generated for
    isPremium: boolean; // randomly true or false
}

export type VerificationStatus = "Potencialmente Verdadera" | "Potencialmente Falsa" | "Incierto";

export interface VerificationResult {
  status: VerificationStatus;
  explanation: string;
  keywords: string[];
  confidenceScore: number; // 0.0 to 1.0
  analyzedTextSnippet?: string; // A snippet of the text that was analyzed
  originalUrl?: string;
}

export interface GeminiVerificationFormat {
  status: VerificationStatus;
  explanation: string;
  keywords: string[];
  confidenceScore: number;
}