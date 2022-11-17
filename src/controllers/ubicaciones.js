const Ubicacion = require('../modules/Ubicacion')
/*create */
function crearUbicacion(req, res){
    const info = req.body;
    const ubica = new Ubicacion(info)
    ubica.save()
    .then( data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
    
}

/* read*/
function obtenerUbicaciones(req, res){
    Ubicacion.find()
    .then(data =>{

        filtroData = data.map((linea) => linea.publicData())
        res.send(filtroData)
        
    } )
}

/*Update */
function updateUbicacion(req, res){

const filter = { nombre: req.body.nombre};
const update =req.body.datos;

 Ubicacion.findOneAndUpdate(filter, update)
 .then((data) => {
    console.log(data)
    if(data!=null){
        Ubicacion.findOne(filter)
        .then((resp) => {
            res.status(200).send(resp)
        })
    }else{
        res.status(400).send("No existe informacion")
    }
   

 })

}



/*Delete */

function eliminarUbicacion(req, res){
    const name = req.params.name
    Ubicacion.findOneAndDelete({nombre: name})
    .then(data => {
        data!=null? res.status(200).send(data):res.status(400).send("No existe la instalacion que desea eliminar")

    })
    .catch(err => res.status(500).send(err))

}



module.exports = {
    obtenerUbicaciones,
    crearUbicacion,
    eliminarUbicacion,
    updateUbicacion
}

