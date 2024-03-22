const array = [1, 4, 6, 8];

const multiArray = array.reduce((acc, value) => {
  return acc * value;
}, 0);

console.log(multiArray);
