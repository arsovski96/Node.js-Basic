import { v4 as uuidv4 } from "uuid";
import colors from "colors";
import { EventEmitter } from "events";
import fs from "fs";
export const eventEmitter = new EventEmitter();

const createStudent = (studentFullname, studentEmail, studentPassword) => {
  const newStudent = {
    Name: studentFullname,
    Email: studentEmail,
    Password: studentPassword,
    Id: uuidv4(),
  };

  fs.appendFileSync(
    "students.json",
    JSON.stringify(newStudent) + "\n",
    console.log("Student saved to file".yellow)
  );

  fs.appendFileSync(
    "greeting_log.txt",
    (studentFullname += "\n"),
    console.log("Student name added to log file".yellow)
  );

  eventEmitter.emit("greetStudent", studentFullname);
};

eventEmitter.on("greetStudent", (studentFullname) => {
  console.log(`Welcome ${studentFullname}!`.green);
});

export default createStudent;
