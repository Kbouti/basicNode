// Following along with net Ninja's node crash course on youtube
// Starting real basic by declaring a variable and using it in a function. We run the code by running node.

// const name = "Link";
// const greet = (name) => {
//   console.log(`The hero's name is ${name}`);
// };

// greet(name);
// greet("Kevin");
// console.log(global);

// global.setTimeout(() => {
//   greet("Kevin");
// }, 3000);

// We don't need to explicity call global, but that's where the setTimeout and setInterval methods live.
// Next we'll setInterval --The difference being that interval repeats, timeout only happens once. We'll also declare it with a name so that we can clear it later.

// const lucy = setInterval(() => {
//   greet("Lucy");
// }, 1000);

// setTimeout(() => {
//   clearInterval(lucy);
// }, 10000);


console.log(__dirname);
console.log(__filename);

// Ok cool, those log the folder and file names.... (Not sure how that's useful..)