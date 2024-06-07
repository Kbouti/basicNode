#!/usr/bin/env node

// Here's where we're at. Starting with step 1 in getting started:
// We've installed node.

//  ************************************************************************************************************************************
// We can run node by running the terminal command:
// node index.js
// ^^ Doing this tells the shell(?) to run our script with node.
// Alternately we could use the watch flag to watch for changes:
// node --watch index.js
// control+c to quit
//  ************************************************************************************************************************************

// We'll embed this information with a "shebang" line at the top of the file
// This line explicitly gives the absolute path of the interpreter.
// Not all operating systems have node in the bin folder, but all should have env. So we use env node
// Now when we run this program, it logs hello world in our terminal console.
// It does not log hello world in the console of index.html, because we have not linked this as our script
console.log("Hello Node console");

// Next, while in the same directory that contains our node file, we run the following command in the terminal:
// chmod u+x index.js
// This gives our file permission to use the shebang file?. Idk. but we'll move on.

//  ************************************************************************************************************************************
// Now we can pass strings in the terminal as javascript. Idk why yet.... But yeah.
// We use syntax:
// node -e ""
// ^^Your javascript(for example a console.log statement) between the ""
//  ************************************************************************************************************************************

// Next we're trying to access the environment variables set at the time process was started.
// We run the following to set these two vaiables:
// USER_ID=239482 USER_KEY=foobar node index.js

// console.log(process.env.USER_ID);
// console.log(process.env.USER_KEY);
// console.log(USER_ID);

// I have no idea what this is on about... I only get undefined when I try to console.log(process.....)
// Moving on...

//  ************************************************************************************************************************************

const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello mutherfucking World!");
  })
  .listen(8080);

// Ok whatever this^^ did it worked. We can see our message at the following url:
// http://localhost:8080/
// So I believe we've created a server and asked  node to print some plain text on that server?
// In order for that^ page to be viewable Node must be running. Either run "node index.js" or "node --watch index.js"

//  ************************************************************************************************************************************
// Next we Create a separate module file and created a module to export

let dateModule = require("./modules/myFirstModule.js");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("The date and time is currently: " + dateModule.myDateTime());
    res.end();
  })
  .listen(8020);

// Now we're getting the date and time from a separate module and displaying it at localHost:8020

//  ************************************************************************************************************************************
// Next exercise:
