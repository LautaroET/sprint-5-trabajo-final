// Importación de la interfaz IRepository y el modelo Pais
import IRepository from './IRepository.mjs';
import Pais from '../models/Pais.mjs';

/**
 * Repositorio para la gestión de los países, implementando los métodos definidos en la interfaz IRepository.
 * 
 * Este repositorio interactúa con la colección "paises" en MongoDB para realizar operaciones de
 * creación, lectura, actualización y eliminación (CRUD) sobre los datos de los países.
 */
class PaisRepository extends IRepository {

    /**
     * Obtiene todos los países almacenados en la base de datos.
     * 
     * @returns {Promise<Array>} Un array de países obtenidos de la base de datos.
     */
    async obtenerTodos() {
        return await Pais.find({creador:"Tapia Lautaro", 'name.official': { $exists: true }}).sort({ 'name.official': 1 });
        // Comentado para búsqueda específica por creador: return await Pais.find({ creador: 'Tapia Lautaro' });
    }

    /**
     * Obtiene un país por su nombre oficial.
     * 
     * @param {String} nombreOficial - El nombre oficial del país que se desea buscar.
     * @returns {Promise<Object|null>} El país encontrado o null si no se encuentra.
     */
    async obtenerPorId(id) {
        return await Pais.findById(id); // Buscar por _id de MongoDB
    }

    /**
     * Crea un nuevo país en la base de datos.
     * 
     * @param {Object} data - Los datos del nuevo país a crear.
     * @returns {Promise<Object>} El país recién creado.
     */
    async crear(data) {
        const nuevoPais = new Pais(data);
        return await nuevoPais.save();
    }

    /**
     * Actualiza un país existente por su nombre oficial.
     * 
     * @param {String} nombreOficial - El nombre oficial del país a actualizar.
     * @param {Object} datosActualizados - Los datos actualizados del país.
     * @returns {Promise<Object|null>} El país actualizado o null si no se encuentra.
     */
    async actualizarPorId(id, datos) {
        return await Pais.findByIdAndUpdate(id, datos, { new: true });
    }

    /**
     * Elimina un país por su nombre oficial.
     * 
     * @param {String} nombreOficial - El nombre oficial del país a eliminar.
     * @returns {Promise<Object>} Resultado de la operación de eliminación.
     */
    async eliminarPorId(id) {
        return await Pais.findByIdAndDelete(id);
    }

}

// Exportación del repositorio para su uso en otras partes de la aplicación
export default PaisRepository;




