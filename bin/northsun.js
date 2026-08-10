#!/usr/bin/env node

import { readFileSync } from "node:fs";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
);

if (["--version", "-v"].includes(process.argv[2])) {
  console.log(packageJson.version);
} else {
  console.log("Northsun core placeholder. Visit https://northsun.ai");
}
