const mongoose = require("mongoose")
const UniqueValidator = require("mongoose-unique-validator")

const EnlaceSchema = mongoose.Schema({
    nombre: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/\S+@\S+\.\S+/, "correo inválido"],
        index: true
    },
    teleOficina: {
        type: String,
        match: [/^[0-9]+$/, "Numero inválido"],
    },
    telePersonal: {
        type: String,
        match: [/^[0-9]+$/, "Numero inválido"],
    },
    direccion: String,
    descripcion: String
},{ timestamps: true})
UniqueValidator.defaults.message = 'El usuario ya existe'


EnlaceSchema.plugin(UniqueValidator)



EnlaceSchema.methods.publicData = function(){
    return {
        nombre: this.nombre,
        email: this.email,
        teleOficina: this.teleOficina,
        telePersonal: this.telePersonal
    }

}


const Enlace = mongoose.model("enlaces",EnlaceSchema)

module.exports = Enlace