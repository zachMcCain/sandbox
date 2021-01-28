// Spread operator

const checkSpread = (a, b, ...args) => {
  console.log(...args);
}

checkSpread(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)