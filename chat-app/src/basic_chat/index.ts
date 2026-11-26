import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI();

async function startTerminalChat() {
  const rl = readline.createInterface({ input, output });

  const chat = ai.chats.create({
    model: "gemini-3.5-flash-lite",
    config: {
      systemInstruction: "You are a sharp, concise terminal assistant.",
    },
  });

  console.log("Chat started! Type 'exit' to quit.\n");

  try {
    while (true) {
      const userMessage = await rl.question("You: ");

      if (userMessage.trim().toLowerCase() === "exit") {
        console.log("Goodbye!");
        break;
      }

      if (!userMessage.trim()) continue;

      process.stdout.write("AI: ");

      const responseStream = await chat.sendMessageStream({
        message: userMessage,
      });

      for await (const chunk of responseStream) {
        process.stdout.write(chunk.text ?? "");
      }

      console.log("\n");
    }
  } catch (error) {
    console.error("\nError communicating with Gemini:", error);
  } finally {
    rl.close();
  }
}

startTerminalChat();