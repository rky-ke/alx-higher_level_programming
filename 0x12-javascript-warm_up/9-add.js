#!/usr/bin/node
const a = process.argv[2];
const b = process.argv[3];

function add(a,b) {
  const sum = parseInt(a) + parseInt(b);
  console.log(sum);
}
if (a !== undefined && b !== undefined) {
  add(a , b);
} else {
  console.log('NaN');
}
