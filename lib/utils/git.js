"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitStagedChanges = exports.addChanges = exports.displayStagedFiles = exports.getStagedChanges = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const child_process_1 = require("child_process");
const excludeDiffFiles = [
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    "dist/*",
    "lib/*",
].map((file) => `':(exclude)${file}'`);
function getStagedChanges() {
    return (0, child_process_1.execSync)(`git diff --staged -- . ${excludeDiffFiles.join(" ")}`)
        .toString()
        .trim();
}
exports.getStagedChanges = getStagedChanges;
function getStagedFiles() {
    return (0, child_process_1.execSync)(`git diff --staged --name-only`)
        .toString()
        .trim()
        .split("\n");
}
function displayStagedFiles() {
    const stagedFiles = getStagedFiles();
    if (stagedFiles) {
        console.log(`Changes to be committed:`);
        stagedFiles.forEach((file) => {
            console.log(chalk_1.default.green(`\t ${file}`));
        });
    }
    else {
        console.log(`No staged files.`);
    }
}
exports.displayStagedFiles = displayStagedFiles;
function addChanges() {
    (0, child_process_1.execSync)(`git add .`);
}
exports.addChanges = addChanges;
function commitStagedChanges(commitMessage) {
    (0, child_process_1.execSync)(`git commit -m "${commitMessage}"`);
    console.log(`\nChanges have been committed.`);
}
exports.commitStagedChanges = commitStagedChanges;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2dpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMERBQTBCO0FBQzFCLGlEQUF5QztBQUV6QyxNQUFNLGdCQUFnQixHQUFhO0lBQ2pDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixPQUFPO0NBQ1IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGNBQWMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUV2QyxTQUFnQixnQkFBZ0I7SUFDOUIsT0FBTyxJQUFBLHdCQUFRLEVBQUMsMEJBQTBCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQ3BFLFFBQVEsRUFBRTtTQUNWLElBQUksRUFBRSxDQUFDO0FBQ1osQ0FBQztBQUpELDRDQUlDO0FBRUQsU0FBUyxjQUFjO0lBQ3JCLE9BQU8sSUFBQSx3QkFBUSxFQUFDLCtCQUErQixDQUFDO1NBQzdDLFFBQVEsRUFBRTtTQUNWLElBQUksRUFBRTtTQUNOLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBRUQsU0FBZ0Isa0JBQWtCO0lBQ2hDLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLElBQUksV0FBVyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ2pDO0FBQ0gsQ0FBQztBQVZELGdEQVVDO0FBRUQsU0FBZ0IsVUFBVTtJQUN4QixJQUFBLHdCQUFRLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsYUFBcUI7SUFDdkQsSUFBQSx3QkFBUSxFQUFDLGtCQUFrQixhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBSEQsa0RBR0MifQ==