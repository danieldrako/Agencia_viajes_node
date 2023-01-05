import express  from 'express';
import router from './routes/index.js';

const app = express();


//Definir puerto
const port = process.env.PORT || 9000;

//Agregar Router
app.use('/',router);


app.listen(port, () => { 
    console.log( `El servidor esta funcionando en el puerto ${port}` )
 })