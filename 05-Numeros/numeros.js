console.log("Altura en centimetros, numero entero")
let altura = 169;
console.log(altura);

console.log("Altura en metros, numero entero")
let alturaM = 1.69;
console.log(alturaM);

console.log("Una variable que contenga tu peso en kilogramos, número de coma flotante")
let peso = 67.69;
console.log(peso);

console.log("Una variable que contenga tu altura en metros redondeada hacia arriba")
console.log(Math.round(alturaM));

console.log("Una variable que contenga si el máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript")
let max = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;
console.log(min_valor_js);
console.log(max_valor_js);

// Casteo de String -> number
let num1 = 17.67;
let num2 = '5.10';
console.log(num1 + num2); // Error de concepto
console.log(Number(num2) + num1);
console.log()
