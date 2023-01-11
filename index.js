import express, { application }  from 'express';
import router from './routes/index.js';

const app = express();


//?Definir puerto
const port = process.env.PORT || 9000;

//?Habilitar PUG
app.set('view engine', 'pug');

//? Obtener el año actual
app.use( (req, res, next) => { 
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes"
    next();
 });

//?Definir la carpeta publica
app.use(express.static('public'));

//?Agregar Router
app.use('/',router);


app.listen(port, () => { 
    console.log( `El servidor esta funcionando en el puerto ${port}` )
 })