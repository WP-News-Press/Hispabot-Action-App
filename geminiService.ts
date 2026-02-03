
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import type { NewsArticle, GeminiNewsArticleFormat, VerificationResult } from '../types';
import { GEMINI_MODEL_TEXT, MASTER_DOCUMENT_CONTENT } from '../constants';

// Helper to generate UUIDs
const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Interactive chat function with White Plains context
export const askHispabot = async (query: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemInstruction = `
    Eres "Hispabot", la inteligencia artificial oficial de White Plains News (WP News). 
    Tu propósito es ser un asistente empático y eficiente para la comunidad de White Plains.

    BASE DE DATOS PRIORITARIA:
    ${MASTER_DOCUMENT_CONTENT}

    REGLAS DE RESPUESTA:
    1. LENGUAJE: Habla en un "Spanglish" natural y profesional (ej. "Chequea este job", "Aplica para este shelter", "Cuidado con el scam").
    2. PRIORIDAD: Busca siempre primero en el DOCUMENTO MAESTRO antes de usar Google Search.
    3. ADVERTENCIAS DE CONTACTO: Si el documento indica "solo texto" para un número, advierte: "⚠️ Por favor, envía solo mensaje de texto a este número, no llames".
    4. CIERRE OBLIGATORIO: Alterna SIEMPRE al final de tus respuestas entre estas dos frases exactas:
       - "White Plains News, noticias que te empoderan."
       - "White Plains News, news that empowers you."
    5. SI NO SABES ALGO: Di "No lo tengo en mi base de datos por ahora, pero Elvis y el equipo de WP News están investigando para ti. ¡Vuelve pronto!".
    6. ACCIÓN CIUDADANA: Siempre termina con un "QUÉ HACER" concreto.
  `;

  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: [{ role: 'user', parts: [{ text: query }] }],
      config: {
        systemInstruction: systemInstruction,
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
      }
    });
    return response.text || "Lo siento, tuve un glitch. Intenta de nuevo. White Plains News, noticias que te empoderan.";
  } catch (error) {
    console.error("Error en Hispabot Chat:", error);
    return "No lo tengo en mi base de datos por ahora, pero el equipo está investigando para ti. White Plains News, news that empowers you.";
  }
};

export const generateNewsArticles = async (categoryName: string, categoryId: string, count: number, targetSite: string | null = null): Promise<NewsArticle[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const documentContext = (categoryId === 'empleo' || categoryId === 'vivienda') ? `BASADO EN: ${MASTER_DOCUMENT_CONTENT}` : "";

  const prompt = `
    Eres Hispabot de WP News. Genera ${count} noticias cortas y útiles para White Plains en la categoría ${categoryName}.
    ${documentContext}
    Responde en JSON:
    [{
      "title": "título",
      "summary": "resumen en spanglish",
      "content": "contenido con acción ciudadana",
      "source": "WP News",
      "date": "2026-01-01",
      "category": "${categoryId}",
      "isPremium": false
    }]
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_MODEL_TEXT,
        contents: [{ role: "user", parts: [{text: prompt}] }],
        config: { responseMimeType: "application/json" },
    });
    
    const parsed = JSON.parse(response.text);
    return parsed.map((item: any) => ({
      ...item,
      id: generateUUID(),
      imageUrl: `https://picsum.photos/seed/${generateUUID()}/600/400`
    }));
  } catch (error) {
    console.error("Error generating news:", error);
    return [];
  }
};

export const verifyNewsText = async (textToAnalyze: string): Promise<VerificationResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Analiza la veracidad de: "${textToAnalyze}". Responde en JSON con {status, explanation, keywords, confidenceScore}.`;
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: GEMINI_MODEL_TEXT,
      contents: [{ role: "user", parts: [{text: prompt}] }],
      config: { responseMimeType: "application/json" },
    });
    return JSON.parse(response.text);
  } catch (error) {
    return { status: "Incierto", explanation: "Error de conexión", keywords: [], confidenceScore: 0 };
  }
};
