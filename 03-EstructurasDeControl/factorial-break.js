/** Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
una bifurcación if y una sentencia break
*/

factorial = 10;
i = 1;

while (i <= 10) {
 
        factorial = factorial * i;
        i++;

        if (factorial == 3628800) {
        break;
        }
}

console.log("El factorial de 10 es: " + factorial);

