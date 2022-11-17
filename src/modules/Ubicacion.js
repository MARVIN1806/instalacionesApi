const mongoose = require("mongoose")
const UniqueValidator = require("mongoose-unique-validator")

const UbicacionSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        index: true,
        unique: true

    },
    dependencia: {
        type: String,
        enum: ['CFE','PEMEX','INE','CONAGUA','CENEGAS']
    },
    latitud: Number,
    longitud: Number,

},{ timestamps: true})



UbicacionSchema.plugin(UniqueValidator,{message: "El nombre de la instalacion ya existe"})

UbicacionSchema.methods.publicData = function(){
    return {
        nombre: this.nombre,
        dependencia: this.dependencia,
        latitud: this.latitud,
        longitud: this.longitud
    }

}
const Ubicacion = mongoose.model("ubicaciones",UbicacionSchema)



module.exports = Ubicacion