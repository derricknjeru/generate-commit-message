import yargs from "yargs";
import { getStagedFiles, getStagedChanges } from "./utils/git";

export const main = async () => {
  // Define the expected command-line arguments
  const options = yargs(process.argv.slice(2)).options({
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
    console.log(`Staged files:\n ${getStagedFiles()}`);
    console.log(`Staged changes:\n ${getStagedChanges()}`);
  }
};

main();
