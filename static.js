#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "./log.txt");
console.log(file);
const read = fs.readFile(file, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  let win = 0;
  let lose = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "1") {
      win++;
    } else {
      lose++;
    }
  }
  console.log("Общее количество игры:", data.length);
  console.log("Общее количество победных игр:", win);
  console.log("Общее количество проишронных игр:", lose);
  console.log("Отношение побед к поражениям:", win / lose);
});
