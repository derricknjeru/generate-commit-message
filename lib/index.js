"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const tslib_1 = require("tslib");
const yargs_1 = tslib_1.__importDefault(require("yargs"));
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
    }
};
exports.main = main;
(0, exports.main)();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUEwQjtBQUVuQixNQUFNLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtJQUM3Qiw2Q0FBNkM7SUFDN0MsTUFBTSxPQUFPLEdBQUcsSUFBQSxlQUFLLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkQsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDMUQsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDekQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7S0FDekQsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUVSLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUU5QywrQ0FBK0M7SUFDL0MsSUFBSSxNQUFNLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDM0M7SUFFRCxJQUFJLFFBQVEsRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxPQUFPLENBQUMsUUFBUSxRQUFRLENBQUMsQ0FBQztLQUNyRDtJQUVELElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ3RDO0FBQ0gsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsSUFBSSxRQXNCZjtBQUVGLElBQUEsWUFBSSxHQUFFLENBQUMifQ==