// Importación de mongoose para interactuar con MongoDB
import mongoose from 'mongoose';

/**
 * Función para conectar a la base de datos MongoDB utilizando Mongoose.
 * 
 * Realiza la conexión a la base de datos MongoDB en la URL proporcionada.
 * Si la conexión es exitosa, muestra un mensaje en consola. Si ocurre un error, 
 * captura la excepción, muestra un mensaje de error y termina el proceso.
 */
export async function connectDB() {
    try {
        // Intentamos conectar a la base de datos MongoDB usando Mongoose
        await mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        // Si ocurre un error durante la conexión, lo capturamos y mostramos un mensaje
        console.error('Error al conectar a MongoDB:', error.message);
        
        // Terminamos el proceso si la conexión falla
        process.exit(1);
    }
}
