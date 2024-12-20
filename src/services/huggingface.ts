import { HfInference } from "@huggingface/inference";

class HuggingFaceService {
  constructor(
    public apiKey?: string,
    public model: string = "gpt2",
    public params: {} = { max_new_tokens: 50 }
  ) {
    this.apiKey = apiKey;
    this.model = model;
    this.params = params;
  }

  async response(prompt: string) {
    if (this.apiKey === undefined || this.apiKey === "") {
      console.error("No API key provided.");
    } else {
      const hf = new HfInference(this.apiKey);
      const result = await hf.textGeneration({
        model: this.model,
        inputs: prompt,
        parameters: this.params,
      });

      return result.generated_text;
    }
  }
}

export { HuggingFaceService };
