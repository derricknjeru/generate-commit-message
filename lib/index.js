"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
const git_1 = require("./utils/git");
const main = async () => {
    // Define the expected command-line arguments
    const options = (0, yargs_1.default)(process.argv.slice(2)).options({
        create: { type: "string", default: undefined, alias: "c" },
        generate: { type: "boolean", default: false, alias: "g" },
        verbose: { type: "boolean", default: false, alias: "v" },
    }).argv;
    const { create, generate, verbose } = options;
    // Log the values of the command-line arguments
    if (create) {
        console.log(`Creating ${options.create}`);
    }
    if (generate) {
        console.log(`Generating ${options.generate} files`);
    }
    if (verbose) {
        console.log(`Verbose mode enabled.`);
        // Log the staged files
        console.log(`Staged files:\n ${(0, git_1.getStagedFiles)()}`);
        console.log(`Staged changes:\n ${(0, git_1.getStagedChanges)()}`);
    }
};
exports.main = main;
(0, exports.main)();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUEwQjtBQUMxQixxQ0FBK0Q7QUFFeEQsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDN0IsNkNBQTZDO0lBQzdDLE1BQU0sT0FBTyxHQUFHLElBQUEsZUFBSyxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ25ELE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQzFELFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQ3pELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0tBQ3pELENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFUixNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFPLENBQUM7SUFFOUMsK0NBQStDO0lBQy9DLElBQUksTUFBTSxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQzNDO0lBRUQsSUFBSSxRQUFRLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsT0FBTyxDQUFDLFFBQVEsUUFBUSxDQUFDLENBQUM7S0FDckQ7SUFFRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVyQyx1QkFBdUI7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBQSxvQkFBYyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUEsc0JBQWdCLEdBQUUsRUFBRSxDQUFDLENBQUM7S0FDeEQ7QUFDSCxDQUFDLENBQUM7QUExQlcsUUFBQSxJQUFJLFFBMEJmO0FBRUYsSUFBQSxZQUFJLEdBQUUsQ0FBQyJ9