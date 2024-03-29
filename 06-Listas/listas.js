console.log("=================================================================")

console.log("- Una variable que contenga la lista de la compra mínimo 5 elementos");
let pax = 8;
let ListaCompra = ["pan", "huevos", "patatas", "cebollas", "sal", "aceite", pax]
console.log(ListaCompra);

console.log("=================================================================")

console.log("- Modifica la lista de la compra y añádele Aceite de Girasol")
ListaCompra.push("aceite de gitasol")
console.log(ListaCompra);

console.log("=================================================================")

console.log("Vuelve a modificar la lista de la compra eliminando Aceite de Girasol")
ListaCompra.pop()
console.log(ListaCompra);

console.log("=================================================================")

console.log("Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)")
const favoriteFilms = [
    {title: 'Pulp Fiction', director: 'Tarantino', year: 1986/05/05},
    {title: 'Lord of the rings', director: 'Jackson', year: 2012/01/01},
    {title: 'ET', director: 'Spilberg', year: 1990/12/12}
];
console.log("=================================================================")
console.log("Una nueva lista que contenga los directores de la lista de películas original (utilizando map)");
const directorList = favoriteFilms.map(valor => {
    return valor.director.concat.title
})


// Recorrer lista con foreach
favoriteFilms.forEach(v => {
    console.log(v)
});

const newArray = favoriteFilms.map((director, indice) => {
    return `${indice +1} - ${director}`
})
console.log(newArray)

console.log("=================================================================")
console.log("Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)");
let tituloPeli = favoriteFilms.map(title => title.tituloPeli)
console.log(tituloPeli)

function titulosFunc({ title }) {
    return `${title}`;
  }

console.log("=================================================================")
console.log("Una nueva lista que contenga las películas posteriores al 1 de enero de 2010");
const filmAnt = favoriteFilms.filter(obj => obj.year < 2010/01/01) 
console.log(filmAnt);