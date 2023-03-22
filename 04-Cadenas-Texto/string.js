console.log("Una cadena de texto con tu Nombre")
let str_name = "Jau"
console.log(str_name)

console.log("Una cadena de texto con tu Apellido")
let surname = "Bass"
console.log(surname)


console.log("Una cadena de texto que se llame estudiante concatenando tu Nombre y tu Apellido con un espacio entre medias")
let estudiante = str_name + " " + surname
console.log(estudiante)

//Modificar codenas de texto 
console.log("Modificar codenas de texto toLowerCase y toUpperCase")
console.log(estudiante.toLowerCase())
console.log(estudiante.toUpperCase())


// Longitude de un string
let str = "Hola esto es una string"
console.log(str.length)

// Buscar una letra
let slice_str = str.slice(0, 3)
console.log(slice_str)

// Busca un expresion
console.log("Busca el nombre dentro de la cadena estudiante")
console.log(estudiante.includes(str_name))

// Una variable que contenga la primera letra del Nombre
console.log(str_name.charAt(0))
console.log(surname.charAt())


// Backtips //
// Las cadenas de texto entre comillas invertidas permiten añadir variables
// Permiten saltos de linea entre las comilla invertidas

let saludo = `El nombre del estudiante es: ${str_name}`
console.log(saludo)

let plantilla = `
<html>
    <h1>Página web</h1>
    <p>Un párrafo</p>
</html>
`;

// Introduccion de varitables en html
let libros = ["Empieza por el por qué", "Hobbit"]