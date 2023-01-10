const { Configuration, OpenAIApi } = require("openai");

async function openAI(apiKey, model, prompt, max_tokens, n, stop, temperature) {
const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: model,
  prompt: prompt,
  max_tokens: max_tokens,
  n: n,
  stop: stop,
  temperature: temperature,
});

const responseLines = completion.data.choices[0].text;
return responseLines;
}

module.exports = {
    openAI
}