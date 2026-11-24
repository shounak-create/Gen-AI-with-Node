import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function run(): Promise<void> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: "Hello! Confirm my TypeScript app is connected in one short sentence.",
    });

    console.log(response.text);
  } catch (error: unknown) {
    console.error("API Error:", error);
  }
}

run();
