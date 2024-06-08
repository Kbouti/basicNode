#!/usr/bin/env node

// Here's where we're at. Starting with step 1 in getting started:
// We've installed node.

//  ************************************************************************************************************************************
// We can run node by running the terminal command:
// node script.js
// ^^ Doing this tells the shell(?) to run our script with node.
// Alternately we could use the watch flag to watch for changes:
// node --watch script.js
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

// const http = require("http");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello mutherfucking World!");
//   })
//   .listen(8080);

// Ok whatever this^^ did it worked. We can see our message at the following url:
// http://localhost:8080/
// So I believe we've created a server and asked  node to print some plain text on that server?
// In order for that^ page to be viewable Node must be running. Either run "node index.js" or "node --watch index.js"

//  ************************************************************************************************************************************
// Next we Create a separate module file and created a module to export

// let dateModule = require("./modules/myFirstModule.js");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("The date and time is currently: " + dateModule.myDateTime());
//     res.end();
//   })
//   .listen(8020);

// Now we're getting the date and time from a separate module and displaying it at localHost:8020

//  ************************************************************************************************************************************
// Next exercise:
// Just breaking things down again
// const http = require("http");

// Create a server object:
// http.createServer(function (req, res) {
//     // First we declare content type for Head. The first argument (200) is a status code that means all ok.
//     // The second argument is an object  containing response headers
//     res.writeHead(200, { "Content-Type": "text/html" });
//     // Next write a response to the client:
//     res.write("Let's go for a bike ride");
//     // End the response:
//     res.end();
//   })
//   .listen(8080);

// The function passed into the http.createServer() method will be executed when someone tries to access the computer on port 8080

//  ************************************************************************************************************************************
// Moving on with the same code as above, just no notes

// Our page now writes the request url on the page.
// So when we visit http://localhost:8080/winter in the browser, we see: "/winter"
// const http = require("http");

// http.createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(req.url);
//     res.end();
//   })
//   .listen(8080);

//  ************************************************************************************************************************************
// Next lesson is to split the query string

// const http = require("http");
// const url = require("url");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     const q = url.parse(req.url, true).query;
//     const txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

// This time we visit:
// http://localhost:8080/?year=2017&month=July
// So basically we've demonstrated that the req object is obtained by the browser request from the server.
// Once we parse the request we can access data from it
//  ************************************************************************************************************************************

// Next up, using Node.js as a file server.
// Hopefully this is where things start to make a little more sense in the context of making an actual website...

// First we're asked to setup an html file in the same directory (done, index.html).
// This time we're requiring the File System module "fs"

// const http = require('http');
// const fs = require('fs');

// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// This will render our index.html page at port 8080
//  ************************************************************************************************************************************

// Next up is Create File:

// const fs = require("fs");
// fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
//   if (err) throw err;
//   console.log("saved!");
// });

// First we require fs, then we append a new file with some conent and a callback that logs 'saved!' if there are no errors.
// If we run node script.js ...This file now exists in our current directory!
// If we accidentally run node watch, it won't keep creating a new file, but it will keep adding the "Hello Content" text to the file

//  ************************************************************************************************************************************

// The fs.open() method takes a "flag" as a second argument. "w" means the file is open for writing.
// If the file does not exist, an empty file is created:

// const fs = require("fs");

// fs.open("mynewfile2.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved another one!");
// });

//  ************************************************************************************************************************************
// fs.writeFile() replaces the specified file and content if it exists. If it does not exist, it makes a new file. 
// Another way of making a file...

const fs = require('fs');
fs.writeFile('mynewfile3.txt', "Hello overridden content!", function(err){
  if (err) throw err;
  console.log(`Saved 3!`);
});

//  ************************************************************************************************************************************
