import express from 'express'
import {connectDB}from './config/dbConfig.mjs';
import paisRoutes from './routes/paisRoutes.mjs'
import expressEjsLayouts from 'express-ejs-layouts';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.set('view engine','ejs');
app.use(expressEjsLayouts);
app.set('layout', 'layout');
app.use('/api',paisRoutes);
app.use((req,res)=>{
    res.status(404).send({mensaje:"Ruta no encontrada"});
});
app.listen(PORT,'0.0.0.0',()=>{
    console.log('Servidor escuchando en el puerto ${PORT}');
});