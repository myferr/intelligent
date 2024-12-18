class GeminiService {
  constructor(
    public apiKey?: string,
    public model: string = "gemini-1.5-flash"
  ) {
    this.apiKey = apiKey;
    this.model = model;
  }

  async response(prompt: string) {
    if (this.apiKey === undefined || this.apiKey === "") {
      console.error("No API key provided.");
    } else {
      const { GoogleGenerativeAI } = require("@google/generative-ai");

      const genAI = new GoogleGenerativeAI(this.apiKey);
      const model = genAI.getGenerativeModel({ model: this.model });

      const result = await model.generateContent(prompt);
      return result.response.text();
    }
  }
}

export { GeminiService };
