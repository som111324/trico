const{Ollama} = require("@langchain/ollama");

const generateFeedback = async (interactions) => {
  const llm = new Ollama({
      model: "mistral:latest",
      temperature: 0,
      maxRetries: 2,
  });

  const prompt = `
 Analyze the following design interaction data: ${JSON.stringify(interactions)}. 
 Identify any areas where the designer might have struggled with maintaining consistency or made mistakes in their design choices. Provide concise feedback, categorizing it under relevant design aspects such as layout, colors, typography, and spacing. 
 If the design is well-executed or has shown improvements, appreciate those aspects and provide suggestions for future designs.
{
    "response": "Your human-like response to the user's last message."
}
  `;

  try {
      const response = await llm.invoke(prompt);
      console.log('Full response:', response);

      // Adjust based on actual Ollama/Langchain response structure
      const content = response;

      if (!content) {
          throw new Error("Failed to get a response from AI model");
      }

      return content;
  } catch (error) {
      console.error("Detailed Ollama generation error:", error);
      throw error;
  }
}
module.exports = generateFeedback;