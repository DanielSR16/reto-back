const express = require("express");
const app =  express();
app.use(express.json());
const conexion = require('./DB/DB_conection')


//Tareas ruta
const tareas = require('./routes/tarea_router');
app.use('/tarea',tareas);


app.listen(3000,()=>{
    console.log('Servidor corriendo')
    conexion.firstConec
});