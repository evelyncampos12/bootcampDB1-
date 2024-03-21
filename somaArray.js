const array = [2, 4, 5, 9, 10, 16];

const somaArray = array.reduce((acc, value) => {
  return acc + value;
}, 0);

console.log("Somas dos valores do Array:", somaArray);
