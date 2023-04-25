class Estudiante {
    
    // Private -> # 
    #nombre
    #edad
    #isDeveloper
    asignaturas
    
    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre
        this.#edad = edad
        this.#isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hello, mi name is ${this.#nombre}, tengo ${this.#edad}`)
    }

    obtenNombre() {
        return this.#nombre
    }
}


const estudiante1 = new Estudiante("Jaco", 34, true)
estudiante1.saludo()
console.log(estudiante1.obtenNombre)
