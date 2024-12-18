# intelligent

![license](https://img.shields.io/npm/l/intelligent) ![latest](https://img.shields.io/npm/v/intelligent)

A library to simplify the usage of AI models.

- [Introduction](#Introduction)
- [Configuration](#Configuration)

✨ **Supported services**:
- Gemini
- OpenAI
- Claude (experimental)
- Ollama

# Introduction

**intelligent** is a simplistic and clean utility library to simplify the usage of AI services for Node.js applications and libraries, **intelligent** is useful for AI-related Node.js applications, AI-related JavaScript libraries, etc.

**intelligent** supports multiple artificial intelligence services and offers model configuration.

# Configuration

**intelligent** offers multiple configuration options to customize your model.

#### `apiKey` (string)

**intelligent** does not provide API keys/secrets already, you need to have your own. You can set the API key/secret using the code below

```js
const ai = new GeminiService("YOUR-API-KEY");
```

> Use the imported service not just `GeminiService`!

#### `model` (string)

The model parameter has an already set default value.

| Service | Default value                |
| ------- | ---------------------------- |
| Gemini  | `gemini-1.5-flash`           |
| OpenAI  | `gpt-4o-mini`                |
| Claude  | `claude-3-5-sonnet-20241022` |
| Ollama  | `llava`                      |

You can customize the `model` parameter using the code below

```js
const ai = new GeminiService("YOUR-API-KEY", "PROVIDE-MODEL-HERE");
```

> Use the imported service not just `GeminiService`!

# Example

```js
const { GeminiService } = require("intelligent");

const ai = new GeminiService("API-KEY");

ai.response("Why is the sky blue?").then((res) => {
  console.log(res);
});
```

> Using default model value.

```js
const { GeminiService } = require("intelligent");

const ai = new GeminiService("API-KEY", "gemini-1.5-pro");

ai.response("Why is the sky blue?").then((res) => {
  console.log(res);
});
```

> Using `gemini-1.5-pro` as model value.
