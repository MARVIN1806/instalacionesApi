const Enlaces = require("../modules/Enlace")

/*create */
function crearEnlace(req, res){
    const info = req.body;
    const enlace = new Enlaces(info)
    enlace.save()
    .then(
        async (data) => {
       
            res.status(200).send(data.publicData())

        }
    )
    .catch(err => {

        const message = err._message
        res.status(500).send(message)
    })
    
}

/* read*/
function obtenerEnlaces(req, res){
    Enlaces.find()
    .then(data =>{

        filtroData = data.map((linea) => linea.publicData())
        res.send(filtroData)
        
    } )
}

/*Update */
function updateEnlaces(req, res){

const filter = { email: req.body.email};
const update =req.body.datos;

Enlaces.findOneAndUpdate(filter, update)
 .then((data) => {
    console.log(data)
    if(data!=null){
        Enlaces.findOne(filter)
        .then((resp) => {
            res.status(200).send(resp)
        })
    }else{
        res.status(400).send("No existe informacion")
    }
   

 })

}



/*Delete */

function eliminarEnlaces(req, res){
            
    if(!req.auth)
    res.sendStatus(401)
    const email = req.params.email
    Enlaces.findOneAndDelete({email: email})
    .then(data => {
        data!=null? res.status(200).send(data):res.status(400).send("No existe la instalacion que desea eliminar")

    })
    .catch(err => res.status(500).send(err))

}



module.exports = {
    crearEnlace,
    obtenerEnlaces,
    updateEnlaces,
    eliminarEnlaces
}
