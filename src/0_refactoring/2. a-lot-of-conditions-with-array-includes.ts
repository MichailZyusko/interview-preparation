// BEFORE

const condition1 = false;
const condition2 = false;
const condition3 = false;
const condition4 = false;
const condition5 = false;
const condition6 = false;
const condition7 = false;
const condition8 = true;

if (condition1
  || condition2
  || condition3
  || condition4
  || condition5
  || condition6
  || condition7
  || condition8) {
  // ...
}

// AFTER
if ([
  condition1, condition2,
  condition3, condition4,
  condition5, condition6,
  condition7, condition8,
].includes(true)) {
  // ...
}
