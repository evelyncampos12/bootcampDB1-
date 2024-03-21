const array = [9, 4, 5, 10, 2, 90, 8, 6, 33, 12, 17, 87, 56];

const maiores20 = array.filter((number) => number > 20);
const menores20 = array.filter((number) => number < 20);
const maiores30 = array.filter((number) => number > 30);

console.log("Número menores que 20:", menores20);
console.log("Números maiores que 20:", maiores20);
console.log("Números maiores que 30:", maiores30);
