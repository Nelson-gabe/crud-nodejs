const express = require('express'); //requerimos express para montar el servidor y se lo agregamos a una variable llamada igual 
const mongoose = require("mongoose"); //requerimos mongose
require("dotenv").config(); //para requerir variables de ambiente propias mias
const noticiaRoutes = require('./routes/noticias'); //traemos las rutas de noticias

const app = express (); //le atribuimos el objeto a una constante llamada app
const port = process.env.PORT || 9000; //creamos una constante con el numero del puerto a usar

//middleware o comunicacion de ruta
app.use(express.json()); // Para parsear application/json
app.use('/api', noticiaRoutes);

//se crea una ruta para poder visualizar los datos (peticion,respuesta)
app.get('/', (req,res) =>{
    res.send("una nueva api para las noticias")
});

//conexion a mongose atlas
mongoose
    .connect(process.env.MONGODB_NOT)
    .then(()=> console.log("conectado correctamente"))  //si conecta imprime eso
    .catch((error) => console.error(error));            //si no le da error

app.listen (port, () => console.log('server iniciado en el puerto ', port)); // creamos un mensaje para saber si corre en el puerto correcto
