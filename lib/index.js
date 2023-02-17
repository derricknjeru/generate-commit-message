"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const git_1 = require("./utils/git");
const openai_1 = require("./utils/openai");
const commit_selector_1 = require("./utils/commit-selector");
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
        console.log(`\n Detecting staged changes...\n`);
        (0, git_1.displayStagedFiles)();
        const diff = (0, git_1.getStagedChanges)();
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
            console.log(`No staged changes detected.`);
        }
    }
};
exports.main = main;
(0, exports.main)();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUEwQjtBQUMxQixxQ0FLcUI7QUFDckIsMkNBQWlEO0FBQ2pELDZEQUFzRTtBQUV0RSxNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQzFDLE9BQU87S0FDSixJQUFJLEVBQUU7S0FDTixPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztLQUN0QixPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXZCLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzdCLDZDQUE2QztJQUM3QyxNQUFNLE9BQU8sR0FBRyxJQUFBLGVBQUssRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuRCxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNwRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUN6RCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtLQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRVIsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFFbEMsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsSUFBQSxnQkFBVSxHQUFFLENBQUM7S0FDZDtJQUVELElBQUksUUFBUSxFQUFFO1FBQ1oscUJBQXFCLEVBQUUsQ0FBQztLQUN6QjtJQUVELFNBQVMscUJBQXFCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUVoRCxJQUFBLHdCQUFrQixHQUFFLENBQUM7UUFFckIsTUFBTSxJQUFJLEdBQUcsSUFBQSxzQkFBZ0IsR0FBRSxDQUFDO1FBRWhDLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELElBQUEsd0JBQWUsRUFBQyxJQUFJLENBQUM7aUJBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFXLEVBQUUsRUFBRTtnQkFDeEQsaURBQWlEO2dCQUNqRCxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQ3JELENBQUM7Z0JBQ0YsSUFBQSw4QkFBWSxFQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO29CQUM1QyxJQUFBLCtCQUFhLEdBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFxQixFQUFFLEVBQUU7d0JBQzdDLElBQUksWUFBWSxFQUFFOzRCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7NEJBQ3ZDLElBQUEseUJBQW1CLEVBQUMsTUFBTSxDQUFDLENBQUM7eUJBRTdCOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQzt5QkFDckM7b0JBQ0gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ2YsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7aUJBQ2xFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQXpEVyxRQUFBLElBQUksUUF5RGY7QUFFRixJQUFBLFlBQUksR0FBRSxDQUFDIn0=