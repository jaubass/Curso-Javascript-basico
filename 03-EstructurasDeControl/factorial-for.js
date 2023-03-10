const dato = 10; // Número del que queremos calcular el factorial
let factorial = 1;
for(let i = dato; i>0; i--){
    factorial = factorial * i;
}
console.log("El factorial de " + dato + " es: " + factorial);