import { GoogleGenAI } from "@google/genai";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    // In Vite, process.env is usually not available in the browser 
    // unless defined in vite.config.ts. We'll use a fallback to import.meta.env
    // to ensure it works in both AI Studio and Vercel.
    const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || import.meta.env.VITE_API_KEY;
    
    if (!apiKey) {
      throw new Error("Gemini API Key is not set. Please configure GEMINI_API_KEY or VITE_API_KEY.");
    }
    
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

export async function getRestaurantInfo() {
  try {
    const ai = getAI();
    
    // Use the pattern from the Gemini API skill: ai.models.generateContent
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Quais são as informações detalhadas e avaliações do restaurante Kaprixu em Tete, Moçambique? Por favor, forneça o endereço exato, horário de funcionamento e alguns comentários de clientes.",
    });
    
    return response;
  } catch (error) {
    console.error("Erro ao buscar informações do Gemini:", error);
    return null;
  }
}
