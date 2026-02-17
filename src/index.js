#!/usr/bin/env node
import { mocking } from "./mocking.js";

// get input from third index of command
const input = process.argv.slice(2).join(" ");

if (!input) {
    console.error("uSaGe: node src/index.js <type your text here>");
    process.exit(1);
}

const result = mocking(input);
console.log(result);