import yargs from "yargs";
import {
  getStagedFiles,
  getStagedChanges,
  addChanges,
  commitStagedChanges,
  getUnfilteredStagedChanges,
} from "./utils/git";
import { generateMessage } from "./utils/openai";
import { selectCommit, commitMessage } from "./utils/commit-selector";
import chalk from "chalk";

const sanitizeMessage = (message: string) =>
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

  const { add, generate } = options;

  if (add) {
    console.log(`Adding changes...`);
    addChanges();
  }

  if (generate) {
    generateCommitMessage();
  }

  function generateCommitMessage() {
    const stagedFiles = getStagedFiles();

    if (stagedFiles) {
      console.log(`Changes to be committed:`);
      stagedFiles.split("\n").forEach((file) => {
        console.log(chalk.green(`\t ${file}`));
      });
    } else {
      console.log(`No staged files.`);
      return;
    }

    let diff = getStagedChanges();
    if (!diff && stagedFiles) {
      diff = getUnfilteredStagedChanges();
    }

    if (diff) {
      console.log(`\nGenerating commit message...\n`);
      generateMessage(diff)
        .then((response) => {
          const choices = response.data.choices.map((choice: any) =>
            //replace "Commit: " with "" to remove the prefix
            sanitizeMessage(choice.text.replace("Commit: ", ""))
          );
          selectCommit(choices).then((commit: string) => {
            commitMessage().then((shouldCommit: boolean) => {
              if (shouldCommit) {
                console.log(`\nCommitting changes...`);
                commitStagedChanges(commit);
              } else {
                console.log(`\nAborting commit...`);
              }
            });
          });
        })
        .catch((error) => {
          if (error.response) {
            console.error(error.response.data.error.message);
          } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
          }
        });
    } else {
      if (stagedFiles) {
      } else {
        console.log(`No staged changes.`);
      }
    }
  }
};

main();
