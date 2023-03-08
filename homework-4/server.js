// Exercise #1

// Create server using HTTP module; -When the default url is hit return HTML content to the user, the content of your choice. -
// When the url /student is hit, return HTML with the informations: -Student name: "your name"; Student lastname: "your lastname"; -Academy: "the academy you are at"; -Subject: "the current subject we are learning";

import colors from "colors";
import http from "http";

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  if (url === "/") {
    response.setHeader("Content-Type", "text/html");
    response.write("<h2>This is server created for homework</h2>");
  }
  if (url === "/student") {
    response.setHeader("Content-Type", "text/html");
    response.write(
      "<h1>Student name: Ivan <br>Student last name: Arsovski <br>Academy: SEDC <br>Subject: NodeJS Basic</h1>"
    );
  }

  response.end();
});

server.listen(3000, () => {
  console.log("Server is up and running".green);
});
