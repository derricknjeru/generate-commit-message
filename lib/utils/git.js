"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStagedChanges = exports.displayStagedFiles = exports.getStagedChanges = void 0;
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
            console.log(`\t ${file}`);
        });
    }
    else {
        console.log(`No staged files.`);
    }
}
exports.displayStagedFiles = displayStagedFiles;
function addStagedChanges() {
    (0, child_process_1.execSync)(`git add .`);
}
exports.addStagedChanges = addStagedChanges;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2dpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBeUM7QUFFekMsTUFBTSxnQkFBZ0IsR0FBYTtJQUNqQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsT0FBTztDQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxjQUFjLElBQUksR0FBRyxDQUFDLENBQUM7QUFFdkMsU0FBZ0IsZ0JBQWdCO0lBQzlCLE9BQU8sSUFBQSx3QkFBUSxFQUFDLDBCQUEwQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUNwRSxRQUFRLEVBQUU7U0FDVixJQUFJLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQVMsY0FBYztJQUNyQixPQUFPLElBQUEsd0JBQVEsRUFBQywrQkFBK0IsQ0FBQztTQUM3QyxRQUFRLEVBQUU7U0FDVixJQUFJLEVBQUU7U0FDTixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQWdCLGtCQUFrQjtJQUNoQyxNQUFNLFdBQVcsR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUNyQyxJQUFJLFdBQVcsRUFBRTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7S0FDSjtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBQ2pDO0FBQ0gsQ0FBQztBQVZELGdEQVVDO0FBRUQsU0FBZ0IsZ0JBQWdCO0lBQzlCLElBQUEsd0JBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQztBQUN4QixDQUFDO0FBRkQsNENBRUMifQ==