const array = [9, 4, 5, 10, 2, 90, 8, 6, 33, 87, 92, 1];

const maiores20 = array.filter((number) => number > 20);
const maiores50 = array.filter((number) => number > 50);

console.log("Número menores que 20:", menores20);
console.log("Números maiores que 20:", maiores20);
console.log("Números maiores que 50:", maiores50);
console.log("Números maiores que 30:", maiores30);
