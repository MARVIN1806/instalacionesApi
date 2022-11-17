routerUbic =  require("express").Router()

const {
    obtenerUbicaciones,
    crearUbicacion,
    eliminarUbicacion,
    updateUbicacion
}  = require('../controllers/ubicaciones')

routerUbic.get('/', obtenerUbicaciones)
routerUbic.post('/',crearUbicacion)
routerUbic.delete('/:name',eliminarUbicacion)
routerUbic.put('/', updateUbicacion)

module.exports = routerUbic