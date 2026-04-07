import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getRestaurantInfo() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Quais são as informações detalhadas e avaliações do restaurante Kaprixu em Tete, Moçambique? Por favor, forneça o endereço exato, horário de funcionamento e alguns comentários de clientes.",
      config: {
        tools: [{ googleMaps: {} }],
      },
    });
    return response;
  } catch (error) {
    console.error("Erro ao buscar informações do Google Maps:", error);
    return null;
  }
}
