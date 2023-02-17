import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateMessage = async (diff: string) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(diff),
      temperature: 0.6,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: false,
      n: 3,
    });
    return response;
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
    throw error;
  }
};

function generatePrompt(diff: string) {
  return `Suggest one insightful and concise
  commit message for the following diff ${diff}, please use imperative mood and do not paraphrase the diff or use the diff as the commit message. Also, please do not preface the commit message with "Commit:"`;
}
