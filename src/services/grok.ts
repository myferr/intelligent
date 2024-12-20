class GrokService {
  private openai: any;

  constructor(public apiKey?: string, public model: string = "grok-2-1212") {
    if (this.apiKey === undefined || this.apiKey === "") {
      console.error("No API key provided.");
    }
    const OpenAI = require("openai");
    this.openai = new OpenAI({
      apiKey: this.apiKey,
      baseURL: "https://api.x.ai/v1",
    });
  }

  async response(prompt: string) {
    const completion = await this.openai.chat.completions.create({
      model: this.model,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return completion.choices[0].message.content;
  }
}

export { GrokService };
