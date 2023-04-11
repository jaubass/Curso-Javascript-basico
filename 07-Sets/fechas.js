/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/ 

// Crea la fecha del momento actual
const fecha = new Date()
console.log(fecha) 

// Crea una fecha definida (los meses en Javascript empiezan en 0 Enero y acaban en 11 Diciembre)
const nacimiento = new Date (1982, 2, 17, 5, 12, 22, 12)
console.log(nacimiento)

const nacimiento2 = new Date ("March 17, 1982")
console.log(nacimiento2)

// Comparar fechas (la igualdad se compara en milisegundos)
console.log(fecha < nacimiento)

// Obtener dia, mes y año de una fecha
// .getDate
console.log(nacimiento.getDate())

//.getMonth
console.log(nacimiento.getMonth() + 1)

// .getFullYear
console.log(nacimiento.getFullYear())


