import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function run(): Promise<void> {
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: "Hello! Confirm my TypeScript app is connected in one short sentence.",
    config: {
      systemInstruction:
        "Answer the questions like a Gen-z Bro",
    },
  });

  console.log(response.text);
}

run();
