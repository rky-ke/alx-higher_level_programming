#!/usr/bin/node
const command = process.argv.length;
console.log(command === 2 ? 'No argument' : command === 3 ? 'Argument found' : 'Arguments found');
