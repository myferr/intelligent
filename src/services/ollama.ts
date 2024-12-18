import ollama from "ollama";

class OllamaService {
  constructor(public model: string = "llava") {
    this.model = model;
  }

  async response(prompt: string) {
    const response = await ollama.generate({
      model: this.model,
      prompt: prompt,
      stream: true,
    });
    for await (const part of response) {
      process.stdout.write(part.response);
    }
  }
}

export { OllamaService };
