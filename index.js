#!/usr/bin/env node
const file = process.argv[2];

import { fork } from "child_process";
import chokidar from "chokidar";
import chalk from "chalk";
console.log(chalk.blue.bgRed.bold("sm-watcher server started"));
const watcher = chokidar.watch("./", {
  ignoreInitial: true,
});

let child = fork("./" + file);

function restartChildProcess() {
  console.log(chalk.green("sm-watcher server restarted...."));
  child.kill();
  child = fork("./" + file);
}

watcher.on("all", () => {
  restartChildProcess();
});
