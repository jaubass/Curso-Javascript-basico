/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const obj = {
    nombre: "Jaco",
    apellido: "Bass",
    edad: 55,
    altura: 170,
    desarrollador: true,
}

let edadUser = obj.edad;
console.log(edadUser);

// Listas de objetos
const listaObj = [
    {nombre: "Jaco", edad: 60},
    {nombre: "Victor", edad: 55},
    {nombre: "Marcus", edad: 58}
]
// Ordenar listas
console.log(listaObj)
listaObj.sort((a, b) => a.edad - b.edad)
console.log(listaObj)