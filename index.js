#!/usr/bin/env node

const readline = require("readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "log.txt");
const number = Math.floor(Math.random() * 2 + 1);

let result = "";
console.log(__dirname);
console.log("Я загадал число 1 или 2. Отгадай");
rl.on("line", (ans) => {
  if (ans == number) {
    console.log("Правильно");
    result = "1";
    rl.close();
  } else {
    console.log("Неправильно");
    result = "0";
    rl.close();
  }
  fs.appendFile(file, result, (err) => {
    if (err) {
      console.error(err);
    }
  });
});
