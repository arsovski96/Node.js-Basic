console.log("Homework 1");

// Homework
// Login functionality with the usage of the package colors
// Create a function that accepts two params: username & password
// If user exists in users array print the message : "User is logged in" in green text
// If not: "User not found" in red text and yellow background

let colors = require("colors");

let users = [
  {
    role: "admin",
    fullname: "John Doe",
    username: "qwerty",
    password: "123qwe",
  },
  { role: "client", fullName: "Bob Bobski", username: "bob", password: "1234" },
];

let loginInfo = (username, password) => {
  let user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    console.log("User is logged in".green);
  } else {
    console.log("User not found".red.bgYellow);
  }
};
loginInfo("qwerty", "123qwe");
