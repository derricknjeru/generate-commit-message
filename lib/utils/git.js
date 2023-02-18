"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitStagedChanges = exports.addChanges = exports.getStagedFiles = exports.getUnfilteredStagedChanges = exports.getStagedChanges = void 0;
require("chalk");
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
function getUnfilteredStagedChanges() {
    return (0, child_process_1.execSync)(`git diff --staged`).toString().trim();
}
exports.getUnfilteredStagedChanges = getUnfilteredStagedChanges;
function getStagedFiles() {
    return (0, child_process_1.execSync)(`git diff --staged --name-only`).toString().trim();
}
exports.getStagedFiles = getStagedFiles;
function addChanges() {
    (0, child_process_1.execSync)(`git add .`);
}
exports.addChanges = addChanges;
function commitStagedChanges(commitMessage) {
    (0, child_process_1.execSync)(`git commit -m "${commitMessage}"`);
    console.log(`\nChanges have been committed.`);
}
exports.commitStagedChanges = commitStagedChanges;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2dpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQkFBMEI7QUFDMUIsaURBQXlDO0FBRXpDLE1BQU0sZ0JBQWdCLEdBQWE7SUFDakMsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLE9BQU87Q0FDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsY0FBYyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBRXZDLFNBQWdCLGdCQUFnQjtJQUM5QixPQUFPLElBQUEsd0JBQVEsRUFBQywwQkFBMEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDcEUsUUFBUSxFQUFFO1NBQ1YsSUFBSSxFQUFFLENBQUM7QUFDWixDQUFDO0FBSkQsNENBSUM7QUFFRCxTQUFnQiwwQkFBMEI7SUFDeEMsT0FBTyxJQUFBLHdCQUFRLEVBQUMsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN6RCxDQUFDO0FBRkQsZ0VBRUM7QUFFRCxTQUFnQixjQUFjO0lBQzVCLE9BQU8sSUFBQSx3QkFBUSxFQUFDLCtCQUErQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDckUsQ0FBQztBQUZELHdDQUVDO0FBRUQsU0FBZ0IsVUFBVTtJQUN4QixJQUFBLHdCQUFRLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEIsQ0FBQztBQUZELGdDQUVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQUMsYUFBcUI7SUFDdkQsSUFBQSx3QkFBUSxFQUFDLGtCQUFrQixhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBSEQsa0RBR0MifQ==