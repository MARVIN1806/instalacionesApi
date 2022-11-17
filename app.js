const express = require("express")
const mongoose = require("mongoose")
const appInstalaciones = express()

require("./src/config/passport");
/*Sirve para parsear todo lo recibido en la peticion*/
const bodyParser = require('body-parser');
appInstalaciones.use(bodyParser.urlencoded({extended:false}));
appInstalaciones.use(bodyParser.json());


mongoose.connect(process.env.MONGOURINST);
 
appInstalaciones.use('/instalacion', require('./src/routes'))
appInstalaciones.listen(process.env.PORT,() => console.log("Servidor activo"));

//prueba de conexion get a raiz
appInstalaciones.get('/', (req, res) => res.send("Bienvenido"))

