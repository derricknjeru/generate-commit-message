import inquirer from 'inquirer';
 
export const selectCommit = async (commits: string[]) => {
  const { commit } = await inquirer.prompt([
    {
      type: 'list',
      name: 'commit',
      message: 'Select a commit',
      choices: commits,
    },
  ]);
  return commit;
}
