var numeros = [10, 5, 20, 2, 4, 8];

const pares = [ ]; 
numeros.map(n => n%2 == 0? pares.push(n):null);
console.log(pares);