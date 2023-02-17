"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectCommit = void 0;
const tslib_1 = require("tslib");
const inquirer_1 = tslib_1.__importDefault(require("inquirer"));
const selectCommit = async (commits) => {
    const { commit } = await inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'commit',
            message: 'Select a commit',
            choices: commits,
        },
    ]);
    return commit;
};
exports.selectCommit = selectCommit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0LXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NvbW1pdC1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0VBQWdDO0FBRXpCLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSxPQUFpQixFQUFFLEVBQUU7SUFDdEQsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sa0JBQVEsQ0FBQyxNQUFNLENBQUM7UUFDdkM7WUFDRSxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixPQUFPLEVBQUUsT0FBTztTQUNqQjtLQUNGLENBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQTtBQVZZLFFBQUEsWUFBWSxnQkFVeEIifQ==