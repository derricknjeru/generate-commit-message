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
    const { add, generate, verbose } = options;
    if (add) {
        console.log(`Adding changes...`);
        (0, git_1.addStagedChanges)();
    }
    if (generate) {
        generateCommitMessage();
    }
    function generateCommitMessage() {
        console.log(`Detecting staged changes...\n`);
        (0, git_1.displayStagedFiles)();
        const diff = (0, git_1.getStagedChanges)();
        if (diff) {
            console.log(`\nGenerating commit message...\n`);
            (0, openai_1.generateMessage)(diff)
                .then((response) => {
                //console.log(response.data);
                const choices = response.data.choices.map((choice) => 
                //replace "Commit: " with "" to remove the prefix
                sanitizeMessage(choice.text.replace("Commit: ", "")));
                (0, commit_selector_1.selectCommit)(choices).then((commit) => {
                    console.log(`\n Selected commit message: ${commit}`);
                });
            })
                .catch((error) => {
                console.error(error);
            });
        }
        else {
            console.log(`No staged changes detected.`);
        }
    }
};
exports.main = main;
(0, exports.main)();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUEwQjtBQUMxQixxQ0FJcUI7QUFDckIsMkNBQWlEO0FBQ2pELDZEQUF1RDtBQUV2RCxNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQVksRUFBRSxFQUFFLENBQ3ZDLE9BQU87S0FDSixJQUFJLEVBQUU7S0FDTixPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztLQUN0QixPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXZCLE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzdCLDZDQUE2QztJQUM3QyxNQUFNLE9BQU8sR0FBRyxJQUFBLGVBQUssRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUNuRCxHQUFHLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUNwRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUN6RCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtLQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRVIsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBRTNDLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUEsc0JBQWdCLEdBQUUsQ0FBQztLQUNwQjtJQUVELElBQUksUUFBUSxFQUFFO1FBQ1oscUJBQXFCLEVBQUUsQ0FBQztLQUN6QjtJQUVELFNBQVMscUJBQXFCO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUU3QyxJQUFBLHdCQUFrQixHQUFFLENBQUM7UUFFckIsTUFBTSxJQUFJLEdBQUcsSUFBQSxzQkFBZ0IsR0FBRSxDQUFDO1FBRWhDLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELElBQUEsd0JBQWUsRUFBQyxJQUFJLENBQUM7aUJBQ2xCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNqQiw2QkFBNkI7Z0JBQzdCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO2dCQUMxRCxpREFBaUQ7Z0JBQy9DLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FDckQsQ0FBQztnQkFDRixJQUFBLDhCQUFZLEVBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ3ZELENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQTlDVyxRQUFBLElBQUksUUE4Q2Y7QUFFRixJQUFBLFlBQUksR0FBRSxDQUFDIn0=