const { Configuration, OpenAIApi } = require("openai");

/**
 *
 * @name openAI
 * @async function
 * @description Ask OpenAI a question and it will return a response
 * @param {string} apiKey Your API key you can get from OpenAI website
 * @param {string} model The language model you want to use
 * @param {string} prompt The prompt you want to ask the AI
 * @param {number} max_tokens Maximum tokens you want AI to generate, including prompt tokens (1000 tokens are around 750 words)
 * @param {number} n Number of sentences you want AI to generate
 * @param {string} stop Define a character you want AI to stop generating it's tokens, "None" means no stop
 * @param {number} temperature This defines the randomness of AI responses, the lower it is, the more accurate answers will be
 * @returns {string} The string representation of the AI response. It is asynchronous function, so you may need to await the response.
 */
async function openAI(apiKey, model, prompt, max_tokens, n, stop, temperature) {
  // Set configuration
  const configuration = new Configuration({
    apiKey: apiKey,
  });

  // Load configuration
  const openai = new OpenAIApi(configuration);

  // Load model
  const completion = await openai.createCompletion({
    model: model,
    prompt: prompt,
    max_tokens: max_tokens,
    n: n,
    stop: stop,
    temperature: temperature,
  });

  // Return a text response
  const responseLines = completion.data.choices[0].text;
  return responseLines;
}

module.exports = {
  openAI,
};
