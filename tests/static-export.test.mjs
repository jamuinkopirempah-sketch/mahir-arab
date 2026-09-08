import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const buildCommand = process.platform === "win32"
  ? [process.env.ComSpec ?? "cmd.exe", ["/d", "/s", "/c", "npm.cmd run build"]]
  : ["npm", ["run", "build"]];

test("production build exports the homepage and every unit as static HTML", () => {
  execFileSync(buildCommand[0], buildCommand[1], { cwd: root, stdio: "inherit" });

  assert.ok(existsSync(path.join(root, "out", "index.html")));

  for (let unitId = 1; unitId <= 8; unitId += 1) {
    assert.ok(existsSync(path.join(root, "out", "unit", String(unitId), "index.html")));
  }
});
