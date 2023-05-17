let nombre = Jaco
let apellido = Pastorius

const persona = new persona(nombre, apellido)

console.log(persona)

localStorage.setItem(nombre)
localStorage.setItem(apellido)

sessionStorage.setItem(nombre)
sessionStorage.setItem(apellido)

document.cookie = "nombreJaco;expires=" + new Date(2023, 12, 24).toTCString();
