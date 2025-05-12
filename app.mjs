// Importamos las dependencias necesarias
import express from 'express'; // Framework de Node.js para crear aplicaciones web
import { connectDB } from './config/dbConfig.mjs'; // Función para conectar a la base de datos
import paisRoutes from './routes/paisRoutes.mjs'; // Rutas relacionadas con los países
import expressEjsLayouts from 'express-ejs-layouts'; // Middleware para manejar layouts en EJS

// Creamos una instancia de la aplicación Express
const app = express();

// Definimos el puerto en el que el servidor escuchará. Si no está definido en el entorno, por defecto será 3000
const PORT = process.env.PORT || 3000;

// Middleware para procesar los datos de las solicitudes HTTP
app.use(express.json()); // Permite recibir datos en formato JSON
app.use(express.urlencoded({ extended: true })); // Permite recibir datos de formularios codificados en URL

// Conectamos con la base de datos
connectDB();

// Configuramos el motor de plantillas a EJS (Embedded JavaScript)
app.set('view engine','ejs');

// Usamos el middleware express-ejs-layouts para gestionar el layout común en las vistas
app.use(expressEjsLayouts);

// Especificamos el layout que se usará en las vistas (generalmente contiene el encabezado y pie de página comunes)
app.set('layout', 'layout');

// Registramos las rutas para manejar las solicitudes relacionadas con los países, prefijadas con "/api"
app.use('/api', paisRoutes);

// Middleware para manejar rutas no encontradas (errores 404)
app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" }); // Enviamos un mensaje de error si la ruta no existe
});

// Iniciamos el servidor, escuchando en el puerto especificado (por defecto 3000)
// '0.0.0.0' permite que el servidor sea accesible desde cualquier IP, útil para contenedores Docker o servidores remotos
app.listen(PORT, '0.0.0.0', () => {
    // Una vez que el servidor está escuchando, mostramos un mensaje en la consola
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
