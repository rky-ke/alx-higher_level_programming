#!/usr/bin/node
let command = process.argv;
if (command.length === 2) {
  console.log('No Argument');
} else if (command.length === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
