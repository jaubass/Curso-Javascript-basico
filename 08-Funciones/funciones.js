/**
 * Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos */

// Funcion con parámetros
function verdadero(param) {
    console.log(param)
}

verdadero(true);

// Una función sin parámetros que devuelva siempre "true"
function siempreVerdadero (v = true) {
    console.log(v)
}

siempreVerdadero()

// Carga y sobrecarga de funciones

function saludar () {
    hello()
}

function hello () {
    console.log("Hello function!")
}

hello()

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const miPromesa = new Promise((resolve, reject) => {
    if (true) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado"))
    .catch(() => console.log("EROOR"))
    .finally(() => ("El finally se ejecuta siempre"))


const promiseSetTimeOut = new Promise((resolve, reject) =>{
    if (Math.random() > 0.5) {
        resolve ("mayor que 0.5")
        } else {
        reject ("menor de 0.5")
    }
})

promiseSetTimeOut
    .then(() => console.log("Se ha ejecutado"))
    .catch(() => console.log("ERROR"))
    .finally(() => ("El finally se ejecuta siempre"))


// Una función generadora de índices pares automáticos */

function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id > 10) {
            return
        }
        yield id
    }
} 

const gen = generaId();

console.log(gen.next())
console.log(gen.next())

