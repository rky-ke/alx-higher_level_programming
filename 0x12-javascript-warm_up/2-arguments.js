#!/usr/bin/node
const command = process.argv.length;
if (command === 2) {
  console.log('No Argument');
} else if (command === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
