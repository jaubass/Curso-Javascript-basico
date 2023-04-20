const moduloMatematicas = require("./modulos/controller.js")
console.log(moduloMatematicas)

const sumaNum = moduloMatematicas.suma(2, 3)
const multNum = moduloMatematicas.multiplica(2, 3)

console.log(sumaNum, multNum)