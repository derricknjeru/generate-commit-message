"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const git_1 = require("./utils/git");
const openai_1 = require("./utils/openai");
const commit_selector_1 = require("./utils/commit-selector");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const sanitizeMessage = (message) => message
    .trim()
    .replace(/[\n\r]/g, "")
    .replace(/(\w)\.$/, "$1");
const main = async () => {
    // Define the expected command-line arguments
    const options = (0, yargs_1.default)(process.argv.slice(2)).options({
        add: { type: "boolean", default: false, alias: "a" },
        generate: { type: "boolean", default: false, alias: "g" },
        verbose: { type: "boolean", default: false, alias: "v" },
    }).argv;
    const { add, generate } = options;
    if (add) {
        console.log(`Adding changes...`);
        (0, git_1.addChanges)();
    }
    if (generate) {
        generateCommitMessage();
    }
    function generateCommitMessage() {
        const stagedFiles = (0, git_1.getStagedFiles)();
        if (stagedFiles) {
            console.log(`Changes to be committed:`);
            stagedFiles.split("\n").forEach((file) => {
                console.log(chalk_1.default.green(`\t ${file}`));
            });
        }
        else {
            console.log(`No staged files.`);
            return;
        }
        let diff = (0, git_1.getStagedChanges)();
        if (!diff && stagedFiles) {
            diff = (0, git_1.getUnfilteredStagedChanges)();
        }
        if (diff) {
            console.log(`\nGenerating commit message...\n`);
            (0, openai_1.generateMessage)(diff)
                .then((response) => {
                const choices = response.data.choices.map((choice) => 
                //replace "Commit: " with "" to remove the prefix
                sanitizeMessage(choice.text.replace("Commit: ", "")));
                (0, commit_selector_1.selectCommit)(choices).then((commit) => {
                    (0, commit_selector_1.commitMessage)().then((shouldCommit) => {
                        if (shouldCommit) {
                            console.log(`\nCommitting changes...`);
                            (0, git_1.commitStagedChanges)(commit);
                        }
                        else {
                            console.log(`\nAborting commit...`);
                        }
                    });
                });
            })
                .catch((error) => {
                if (error.response) {
                    console.error(error.response.data.error.message);
                }
                else {
                    console.error(`Error with OpenAI API request: ${error.message}`);
                }
            });
        }
        else {
            if (stagedFiles) {
            }
            else {
                console.log(`No staged changes.`);
            }
        }
    }
};
exports.main = main;
(0, exports.main)();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUEwQjtBQUMxQixxQ0FNcUI7QUFDckIsMkNBQWlEO0FBQ2pELDZEQUFzRTtBQUN0RSwwREFBMEI7QUFFMUIsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUMxQyxPQUFPO0tBQ0osSUFBSSxFQUFFO0tBQ04sT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7S0FDdEIsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUV2QixNQUFNLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtJQUM3Qiw2Q0FBNkM7SUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFLLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkQsR0FBRyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDcEQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDekQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7S0FDekQsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUVSLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBRWxDLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUEsZ0JBQVUsR0FBRSxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFFBQVEsRUFBRTtRQUNaLHFCQUFxQixFQUFFLENBQUM7S0FDekI7SUFFRCxTQUFTLHFCQUFxQjtRQUM1QixNQUFNLFdBQVcsR0FBRyxJQUFBLG9CQUFjLEdBQUUsQ0FBQztRQUVyQyxJQUFJLFdBQVcsRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4QyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxHQUFHLElBQUEsc0JBQWdCLEdBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtZQUN4QixJQUFJLEdBQUcsSUFBQSxnQ0FBMEIsR0FBRSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDaEQsSUFBQSx3QkFBZSxFQUFDLElBQUksQ0FBQztpQkFDbEIsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ2pCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUN4RCxpREFBaUQ7Z0JBQ2pELGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDckQsQ0FBQztnQkFDRixJQUFBLDhCQUFZLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7b0JBQzVDLElBQUEsK0JBQWEsR0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQXFCLEVBQUUsRUFBRTt3QkFDN0MsSUFBSSxZQUFZLEVBQUU7NEJBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQzs0QkFDdkMsSUFBQSx5QkFBbUIsRUFBQyxNQUFNLENBQUMsQ0FBQzt5QkFDN0I7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3lCQUNyQztvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDZixJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztpQkFDbEU7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDTCxJQUFJLFdBQVcsRUFBRTthQUNoQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7QUFDSCxDQUFDLENBQUM7QUF0RVcsUUFBQSxJQUFJLFFBc0VmO0FBRUYsSUFBQSxZQUFJLEdBQUUsQ0FBQyJ9