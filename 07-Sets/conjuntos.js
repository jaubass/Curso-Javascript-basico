/* 
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/

console.log("========Crear Set========")
const array = [
    {nombre: 'Jaco', edad: 46},
    {nombre: 'Marcus', edad: 62},

];
const miFamily = new Set(array)
console.log(miFamily)

// .add()
console.log("========Añadir un valor en el Set========")
miFamily.add('Jaco')
console.log(miFamily)

console.log("========Añadir un valor en el Set========")
miFamily.add('Javascript')
console.log(miFamily)

// El Set solo muestra valores únicos
miFamily.add('Jau')
console.log(miFamily)
miFamily.add('Javascript')
console.log(miFamily)

// .delete()
console.log("========Borrar un valor en el Set========")
miFamily.delete("Jau")
console.log(miFamily)

// .has()
console.log("========Buscar un valor en el Set========")
console.log(miFamily.has('Jaco'))

// .size
console.log("========Buscar el tamaño del Set========")
console.log(miFamily.size)

// iterar Sets
miFamily.forEach(valor => {
    console.log(valor)
})