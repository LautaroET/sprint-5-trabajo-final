// Importación del repositorio de países para interactuar con la base de datos
import PaisRepository from '../repositories/PaisRepository.mjs';

// Creación de una instancia del repositorio
const paisRepo = new PaisRepository();

/**
 * Servicio para obtener todos los países.
 * 
 * Este servicio llama al repositorio para obtener la lista completa de países desde la base de datos.
 * 
 * @returns {Promise<Array>} Un array de países obtenidos desde la base de datos.
 */
export async function obtenerTodosLosPaisService() {
    return await paisRepo.obtenerTodos();
}

/**
 * Servicio para crear un nuevo país.
 * 
 * Este servicio recibe los datos de un país y llama al repositorio para crear el país en la base de datos.
 * 
 * @param {Object} data - Los datos del nuevo país a crear.
 * @returns {Promise<Object>} El país recién creado.
 */
export async function crearPaisService(data) {
    return await paisRepo.crear(data);
}

/**
 * Servicio para obtener un país por su nombre oficial.
 * 
 * Este servicio recibe el nombre oficial de un país y llama al repositorio para obtener los datos del país.
 * 
 * @param {String} nombreOficial - El nombre oficial del país a buscar.
 * @returns {Promise<Object|null>} El país encontrado o null si no se encuentra.
 */
export async function obtenerPaisePorNombreOficialService(nombreOficial) {
    return await paisRepo.obtenerPorNombreOficial(nombreOficial);
}

/**
 * Servicio para actualizar los datos de un país.
 * 
 * Este servicio recibe el nombre oficial de un país y los datos actualizados, y luego llama al repositorio
 * para actualizar la información del país en la base de datos.
 * 
 * @param {String} nombreOficial - El nombre oficial del país a actualizar.
 * @param {Object} datosActualizados - Los datos actualizados del país.
 * @returns {Promise<Object|null>} El país actualizado o null si no se encuentra.
 */
export async function actualizarPaisService(nombreOficial, datosActualizados) {
    return await paisRepo.actualizar(nombreOficial, datosActualizados);
}

/**
 * Servicio para eliminar un país por su nombre oficial.
 * 
 * Este servicio recibe el nombre oficial de un país y llama al repositorio para eliminar el país de la base de datos.
 * 
 * @param {String} nombreOficial - El nombre oficial del país a eliminar.
 * @returns {Promise<Object>} El resultado de la operación de eliminación.
 */
export async function eliminarPaisPorIdService(id) {
    return await paisRepo.eliminarPorId(id); 
}







