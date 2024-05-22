const express = require("express");
const NoticiaSchema = require("../models/noticias");


const router =express.Router(); //guardamos en una variable el enrutado

//crear nueva Noticia
router.post('/noticias', (req,res) => {
    const noticia = NoticiaSchema(req.body);  //traemos los datos del modelo o esquema
    noticia.save()
    .then((data) => res.json(data)) //me responde con los mismos datos guardados si se guarda
    .catch((error)=> res.json({ message: error})); //si no se guardan sale un error 
});

//obtener todas las noticias
router.get('/noticias', (req,res) => {
    NoticiaSchema.find() //buscar todos los datos
    .then((data) => res.json(data)) //me responde con los mismos datos guardados si se guarda
    .catch((error)=> res.json({ message: error})); //si no se guardan sale un error 
});

//obtener una noticia especifica
router.get('/noticias/:id', (req,res) => {
    const {id} = req.params;
    NoticiaSchema.findById(id) //buscar la noticia por id
    .then((data) => res.json(data)) //me responde con los mismos datos guardados si se guarda
    .catch((error)=> res.json({ message: error})); //si no se guardan sale un error 
});

//actualizar una noticia especifica
router.put('/noticias/:id', (req,res) => {
    const {id} = req.params
    const {titulo, contenido, imagen } = req.body;
    NoticiaSchema.updateOne({_id: id}, { $set: {titulo,contenido,imagen}}) // actualizamos la noticia por id
    .then((data) => res.json(data)) //me responde con los mismos datos guardados si se guarda
    .catch((error)=> res.json({ message: error})); //si no se guardan sale un error 
});

//eleminar una noticia
router.delete('/noticias/:id', (req,res) => {
    const {id} = req.params;
    NoticiaSchema
    .deleteOne({_id: id}) // eliminamos por id la noticia
    .then((data) => res.json(data)) //me responde con los mismos datos guardados si se guarda
    .catch((error)=> res.json({ message: error})); //si no se guardan sale un error 
});

module.exports = router;

