#!/usr/bin/env node
const file = process.argv[2]
import { fork } from "child_process";
import chokidar from "chokidar";
import chalk from "chalk";
console.log(chalk.blue.bgRed.bold("UPAR WALA SAB DEKH RAHA HAI"));
const watcher = chokidar.watch("./", {
  ignoreInitial: true,
});

let child = fork("./" + file);
let count = 1;

function restartChildProcess() {
  console.log(
    chalk.green("Bhai kya kar raha hai ") + count + chalk.green(" bar ho gya")
  );
  count++;
  child.kill();
  child = fork("./" + file);
}

watcher.on("all", () => {
  restartChildProcess();
});
