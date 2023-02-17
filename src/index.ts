import yargs from "yargs";
import {
  displayStagedFiles,
  getStagedChanges,
  addStagedChanges,
} from "./utils/git";
import { generateMessage } from "./utils/openai";
import { selectCommit } from "./utils/commit-selector";

const sanitizeMessage = (message: any) =>
  message
    .trim()
    .replace(/[\n\r]/g, "")
    .replace(/(\w)\.$/, "$1");

export const main = async () => {
  // Define the expected command-line arguments
  const options = yargs(process.argv.slice(2)).options({
    add: { type: "boolean", default: false, alias: "a" },
    generate: { type: "boolean", default: false, alias: "g" },
    verbose: { type: "boolean", default: false, alias: "v" },
  }).argv;

  const { add, generate, verbose } = options;

  if (add) {
    console.log(`Adding changes...`);
    addStagedChanges();
  }

  if (generate) {
    generateCommitMessage();
  }

  function generateCommitMessage() {
    console.log(`Detecting staged changes...\n`);

    displayStagedFiles();

    const diff = getStagedChanges();

    if (diff) {
      console.log(`\nGenerating commit message...\n`);
      generateMessage(diff)
        .then((response) => {
          //console.log(response.data);
          const choices = response.data.choices.map((choice: any) =>
          //replace "Commit: " with "" to remove the prefix
            sanitizeMessage(choice.text.replace("Commit: ", ""))
          );
          selectCommit(choices).then((commit: any) => {
            console.log(`\n Selected commit message: ${commit}`);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log(`No staged changes detected.`);
    }
  }
};

main();
