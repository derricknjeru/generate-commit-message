"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStagedFiles = exports.getStagedChanges = void 0;
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
        .trim();
}
exports.getStagedFiles = getStagedFiles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2dpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBeUM7QUFFekMsTUFBTSxnQkFBZ0IsR0FBYTtJQUNqQyxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsT0FBTztDQUNSLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxjQUFjLElBQUksR0FBRyxDQUFDLENBQUM7QUFFdkMsU0FBZ0IsZ0JBQWdCO0lBQzlCLE9BQU8sSUFBQSx3QkFBUSxFQUFDLDBCQUEwQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUNwRSxRQUFRLEVBQUU7U0FDVixJQUFJLEVBQUUsQ0FBQztBQUNaLENBQUM7QUFKRCw0Q0FJQztBQUVELFNBQWdCLGNBQWM7SUFDNUIsT0FBTyxJQUFBLHdCQUFRLEVBQ2IsK0JBQStCLENBQ2hDO1NBQ0UsUUFBUSxFQUFFO1NBQ1YsSUFBSSxFQUFFLENBQUM7QUFDWixDQUFDO0FBTkQsd0NBTUMifQ==