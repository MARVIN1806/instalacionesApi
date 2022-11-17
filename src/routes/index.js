const routerInsta = require("express").Router()
const cors = require('cors');
routerInsta.get('/', (req, res) => {
    res.send("Bienvenido a ubicacion de instalaciones")
})

routerInsta.use(cors({
    origin: '*'
}));
routerInsta.use('/ubica', require("./ubicacion"))
routerInsta.use('/enlaces', require("./enlace"))
routerInsta.use('/usuarios', require("./usuario"))

module.exports = routerInsta; 