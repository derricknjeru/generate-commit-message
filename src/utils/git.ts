import chalk from "chalk";
import { execSync } from "child_process";

const excludeDiffFiles: string[] = [
  "package-lock.json",
  "yarn.lock",
  "pnpm-lock.yaml",
  "dist/*",
  "lib/*",
].map((file) => `':(exclude)${file}'`);

export function getStagedChanges() {
  return execSync(`git diff --staged -- . ${excludeDiffFiles.join(" ")}`)
    .toString()
    .trim();
}

function getStagedFiles() {
  return execSync(`git diff --staged --name-only`)
    .toString()
    .trim()
    .split("\n");
}

export function displayStagedFiles() {
  const stagedFiles = getStagedFiles();
  if (stagedFiles) {
    console.log(`Changes to be committed:`);
    stagedFiles.forEach((file) => {
      console.log(chalk.green(`\t ${file}`));
    });
  } else {
    console.log(`No staged files.`);
  }
}

export function addChanges() {
  execSync(`git add .`);
}

export function commitStagedChanges(commitMessage: string) {
  execSync(`git commit -m "${commitMessage}"`);
  console.log(`\nChanges have been committed.`);
}
