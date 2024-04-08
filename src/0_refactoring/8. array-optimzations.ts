const clearArray = () => {
  // BEFORE
  const arr_1 = [1, 2, 3, 4, 5, 6];
  arr_1.splice(0, arr_1.length);
  console.log(arr_1.length); // 0 
  console.log(arr_1); // []

  // AFTER
  const arr_2 = [1, 2, 3, 4, 5, 6];
  arr_2.length = 0; // or arr_2 = []
  console.log(arr_2.length); // 0 
  console.log(arr_2); // []
}

const mergeTwoArrays = () => {
  // BEFORE
  const arr_1 = [1, 2, 3];
  const arr_2 = [4, 5, 6];
  console.log(arr_1.concat(arr_2)); // [1,2,3,4,5,6]; 

  // AFTER
  console.log(arr_1.push(...arr_2)); // [1,2,3,4,5,6]; 
}

const loopOptimization = () => {
  const arr = [1, 2, 3, 4, 5];

  // BEFORE
  for (let i = 0; i < arr.length; i++) { }

  // AFTER
  const len = arr.length;
  for (let i = 0; i < len; i++) { }
}

const dataLookUp = () => {
  const arr = ['a', 'b', 'c']
  // BEFORE
  console.log(!!arr.find((item) => item === 'a'))

  // AFTER
  const mySet = new Set(arr);
  console.log(mySet.has('a'));  // true
}