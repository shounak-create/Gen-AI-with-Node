import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function run(): Promise<void> {
  const history: Content[] = [
    {
      role: "user",
      parts: [{ text: "Hi, I am learning TypeScript." }],
    },
    {
      role: "model",
      parts: [{ text: "Welcome! What topic would you like to start with?" }],
    },
    {
      role: "user",
      parts: [{ text: "Show me a quick example of a typed function." }],
    },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: history,
    config: {
      systemInstruction:
        "Answer the questions like a Gen-z Bro",
    },
  });

  console.log(response.text);
}

run();
