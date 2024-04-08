const convertStringToNumber = () => {
  const stringNumber = '1'

  // BEFORE
  const slowNumberConversion = Number.parseInt(stringNumber);

  // AFTER
  const fasterNumberConversion = +stringNumber;
}

const mathFloor = () => {
  const realNumber = 1.1

  // BEFORE
  const slowMathFloor = Math.floor(realNumber)

  // AFTER
  const fasterMathFloor = ~~realNumber
}


const multiplyByTwo = () => {
  // BEFORE
  console.log(2 * 2); // 1*(2*2) = 4
  console.log(2 * 2 * 2); // 1*(2*2*2) = 8
  console.log(3 * 2 * 2 * 2); // 3*(2*2*2) = 24

  // AFTER
  console.log(1 << 2); // 1*(2*2) = 4
  console.log(1 << 3); // 1*(2*2*2) = 8
  console.log(3 << 3); // 3*(2*2*2) = 24
}

const integerDivideByTwo = () => {
  // BEFORE
  console.log(Math.floor(100 / 2)); // 50, деление на 2
  console.log(Math.floor(100 / 2 / 2)); // 25, деление на 2 два раза
  console.log(Math.floor(100 / 2 / 2 / 2)); // 12, деление на 2 три раза, целая часть от результата

  // AFTER
  console.log(100 >> 1); // 50, деление на 2
  console.log(100 >> 2); // 25, деление на 2 два раза
  console.log(100 >> 3); // 12, деление на 2 три раза, целая часть от результата
}