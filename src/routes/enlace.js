routerEnlace = require("express").Router()
const auth = require("./auth")
const {
    crearEnlace,
    obtenerEnlaces,
    updateEnlaces,
    eliminarEnlaces
} = require("../controllers/enlaces")


routerEnlace.get('/', obtenerEnlaces)
routerEnlace.post('/',crearEnlace)
routerEnlace.delete('/:email',auth.requerido,eliminarEnlaces)
routerEnlace.put('/', updateEnlaces)

module.exports = routerEnlace