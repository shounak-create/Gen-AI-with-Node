import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function run() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: "Hello! Confirm my JavaScript app is connected in one short sentence.",
    });
    console.log(response.text);
  } catch (error) {
    if (error.status === 503) {
      console.error("Model is temporarily busy. Please try again in a few seconds.");
    } else {
      console.error("API Error:", error.message);
    }
  }
}

run();
