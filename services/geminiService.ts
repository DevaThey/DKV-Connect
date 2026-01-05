
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askScheduleAI = async (prompt: string, scheduleContext: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful assistant for high school students in class XI DKV 2. 
      Use the following schedule data to answer questions briefly and accurately in Indonesian. 
      
      IMPORTANT FORMATTING RULES:
      1. NEVER use triple asterisks (***) for bolding. Use standard double asterisks (**) only if necessary.
      2. Use clear paragraphs and line breaks (spasi ke bawah) to separate different points or information.
      3. Keep the layout clean and readable.
      
      Schedule Context: ${scheduleContext}
      User Question: ${prompt}`,
    });
    return response.text || "Maaf, saya tidak bisa menemukan jawaban untuk itu.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI.";
  }
};
