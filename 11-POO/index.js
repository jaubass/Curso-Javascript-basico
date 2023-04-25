class Persona {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hello, mi name is ${this.nombre}, tengo ${this.edad}`)
    }
}

const persona1 = new Persona("jaco", 34, true)
console.log(persona1)
persona1.saludo()