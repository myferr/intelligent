class ClaudeService {
  constructor(
    public apiKey?: string,
    public model: string = "claude-3-5-sonnet-20241022"
  ) {
    this.apiKey = apiKey;
    this.model = model;
  }

  async response(prompt: string) {
    if (this.apiKey === undefined || this.apiKey === "") {
      console.error("No API key provided.");
    } else {
      const Anthropic = require("@anthropic-ai/sdk");

      const anthropic = new Anthropic({
        apiKey: this.apiKey,
      });

      const msg = await anthropic.messages.create({
        model: this.model,
        max_tokens: 1000,
        temperature: 0,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: prompt,
              },
            ],
          },
        ],
      });
      console.log(msg);
    }
  }
}

export { ClaudeService };
