#!/usr/bin/node
const number = Math.floor(Number(process.argv[2]));
if (isNaN(number)) {
  console.log('Not a Number');
} else{
  console.log(`My number: ${number}`);
}
