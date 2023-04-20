/* 
Enunciado del ejercicio: 
Crea un nuevo proyecto de Node
- Instala la dependencia Winston
- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch
*/

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


logger.info("Info")
logger.warn("Advertencia")
logger.error("Error")

let param = 1

function test(param = 1) {

    try {

        if (param < 10)
        console.log("Its here")
    } catch {
        logger.warn("El numero no e valido")
    }
}
  

setTimeout(function() {
  try {
    noSuchVariable; // try...catch maneja el error!
  } catch {
    alert( "El error se detecta aquí!" );
  }
}, 1000);