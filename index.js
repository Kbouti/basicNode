#!/usr/bin/env node

// Now I need to "Add the code needed to serve the right pafe according to the url"

// I don't understand this instruction^^^ Soo starting the lesson back a few steps


// Here's where we're at. Starting with step 1 in getting started: 
// We've installed node. 
// We can run node by running the terminal command: 
// node index.js

// ^^ Doing this tells the shell(?) to run our script with node. 

// We'll also embed this information with a "shebang" line at the top of the file
// This line explicitly gives the absolute path of the interpreter. 
// Not all operating systems have node in the bin folder, but all should have env. So we use env node
// Now when we run this program, it logs hello world in our terminal console.
// It does not log hello world in the console of index.html, because we have not linked this as our script


console.log('Hello World');

// Next, while in the same directory that contains our node file, we run the following command in the terminal:
// chmod u+x index.js
// This gives our file permission to use the shebang file?. Idk. but we'll move on. 

// Now we can pass strings in the terminal as javascript. Idk why yet.... But yeah. 
// We use syntax:
// node -e ""
// ^^Your javascript(for example a console.log statement) between the ""


// Use watch to continuously watch for changes and restart the file:
// node --watch index.js
// control + c to quit


