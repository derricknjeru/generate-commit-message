"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMessage = void 0;
const tslib_1 = require("tslib");
const openai_1 = require("openai");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new openai_1.OpenAIApi(configuration);
const generateMessage = async (diff) => {
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
    }
    catch (error) {
        throw error;
    }
};
exports.generateMessage = generateMessage;
function generatePrompt(diff) {
    return `Write an insightful but concise git commit message for the following diff: \n\n${diff}\n\n , Don't paraphrase the diff and the commit messages should be in the imperative mood, e.g. "Fix bug" and not "Fixed bug" or "Fixes bug." `;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbmFpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL29wZW5haS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUNBQWtEO0FBQ2xELDREQUE0QjtBQUU1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sYUFBYSxHQUFHLElBQUksc0JBQWEsQ0FBQztJQUN0QyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjO0NBQ25DLENBQUMsQ0FBQztBQUVILE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUVyQyxNQUFNLGVBQWUsR0FBRyxLQUFLLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDcEQsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBQzdDLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsTUFBTSxFQUFFLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDNUIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsS0FBSyxFQUFFLENBQUM7WUFDUixpQkFBaUIsRUFBRSxDQUFDO1lBQ3BCLGdCQUFnQixFQUFFLENBQUM7WUFDbkIsTUFBTSxFQUFFLEtBQUs7WUFDYixDQUFDLEVBQUUsQ0FBQztTQUNMLENBQUMsQ0FBQztRQUNILE9BQU8sUUFBUSxDQUFDO0tBQ2pCO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsTUFBTSxLQUFLLENBQUM7S0FDYjtBQUNILENBQUMsQ0FBQztBQWhCVyxRQUFBLGVBQWUsbUJBZ0IxQjtBQUVGLFNBQVMsY0FBYyxDQUFDLElBQVk7SUFDbEMsT0FBTyxrRkFBa0YsSUFBSSxnSkFBZ0osQ0FBQztBQUNoUCxDQUFDIn0=