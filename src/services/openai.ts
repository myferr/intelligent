class OpenAIService {
  private openai: any;

  constructor(public apiKey?: string, public model: string = "gpt-4o-mini") {
    if (this.apiKey === undefined || this.apiKey === "") {
      console.error("No API key provided.");
    }
    const OpenAI = require("openai");
    this.openai = new OpenAI({
      apiKey: this.apiKey,
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

export { OpenAIService };
