#!/usr/bin/node
const number = Math.floor(Number(process.argv[2]));
console.log(isNaN(number) ? 'Not a Number' : `My number: ${number}`);
