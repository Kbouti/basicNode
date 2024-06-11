// Following along with net Ninja's node crash course on youtube
// Starting real basic by declaring a variable and using it in a function. We run the code by running node.

const name = "Link";
const greet = (name) => {
  console.log(`The hero's name is ${name}`);
};

// greet(name);
// greet("Kevin");

// console.log(global);
global.setTimeout(() => {
  greet("Kevin");
}, 3000);

// We don't need to explicity call global, but that's where the setTimeout and setInterval methods live.
// Next we'll setInterval --The difference being that interval repeats, timeout only happens once.

setInterval(() =>{
    greet("Lucy");
}, 1000);
