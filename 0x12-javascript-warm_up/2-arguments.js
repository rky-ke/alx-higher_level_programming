#!/usr/bin/node
// const command = process.argv.length;
// if (command === 2) {
//   console.log('No Argument');
// } else if (command === 3) {
//   console.log('Argument found');
// } else {
//   console.log('Arguments found');
// }
const count = process.argv.length;
console.log(count === 2 ? 'No argument' : count === 3 ? 'Argument found' : 'Arguments found');
