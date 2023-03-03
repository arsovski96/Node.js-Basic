const fs = require("fs");
const path = require("path");

fs.writeFileSync("homework.txt", "Homework 02 in Basic Node");

let pathForFile = path.join(__dirname, "homework.txt");
console.log(pathForFile);

fs.appendFileSync(pathForFile, "\nFINISHED");

let readContent = fs.readFileSync(pathForFile, { encoding: "utf-8" });
console.log(readContent);
