import { suma, multiplica } from "./modulos/controller.js"
import axios from "axios"

axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(function (response) {
        console.log("Success!!!")
        console.log(response.data)
    })
    .catch(function (error) {
        console.log("Eror!!!")
        console.log(error); 
    })

const sumNum = suma (2, 3)
const multNum = multiplica (2, 3)

console.log(sumNum, multNum)

