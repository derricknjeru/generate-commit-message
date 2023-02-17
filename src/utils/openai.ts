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
    throw error;
  }
};

function generatePrompt(diff: string) {
  return `Generate a git commit message for the following diff: \n\n${diff}\n\n , Don't paraphrase the diff. Commit messages should be in the imperative mood, e.g. "Fix bug" and not "Fixed bug" or "Fixes bug." Commit messages should be as short as possible, while still fully explaining the change. \n\nCommit:`;
}
