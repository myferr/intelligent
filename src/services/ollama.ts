import ollama from "ollama";

class OllamaService {
  constructor(public model: string = "llava") {
    this.model = model;
  }

  async response(prompt: string) {
    const response = await ollama.generate({
      model: this.model,
      prompt: prompt,
      stream: false,
    });

    return response.response;
  }
}

export { OllamaService };
