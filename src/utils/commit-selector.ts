import inquirer from "inquirer";

export const selectCommit = async (commits: string[]) => {
  const { commit } = await inquirer.prompt([
    {
      type: "list",
      name: "commit",
      message: "Select a commit message:",
      choices: commits,
    },
  ]);
  return commit;
};

export const commitMessage = async () => {
  const { shouldCommit } = await inquirer.prompt([
    {
      type: "confirm",
      name: "shouldCommit",
      message: `Are you ready to commit the changes?`,
      default: false,
    },
  ]);
  return shouldCommit;
};
