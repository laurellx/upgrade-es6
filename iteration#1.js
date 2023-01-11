/*Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.*/
let a = 10;
let b = 5;

// 1.1 Ejecuta esta función sin pasar ningún parametro

const sum = () => a + b;
const result = sum(a, b);
console.log(result);

//1.2 Ejecuta esta función pasando un solo parametro

const suma = (sumaNumeros) => a + b;
const sumaNumeros = suma(a + b);
console.log(sumaNumeros);

//1.3 Ejecuta esta función pasando dos parametros

const somma = (a, b) => a + b;
const sommatoria = somma(a, b);
console.log(sommatoria);
