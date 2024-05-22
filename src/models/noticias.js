const mongoose = require ("mongoose"); //requerimos mongose

const NoticiaSchema = mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    contenido:{
        type: String,
        required:true
    },
    imagen:{
        type: String, //usamos String para almacenar la URL de la imagen
        required: false
    }
    // timestamps: {
    //     true //esto añade automáticamente `createdAt` y `updatedAt`
    // }
})

module.exports = mongoose.model('noticias', NoticiaSchema);