/**
 * Interfaz que define los métodos básicos para un repositorio de datos.
 */
class IRepository {
    /**
     * Obtiene todos los registros.
     *
     * @returns {Promise<Array>} Una promesa que resuelve a un array de objetos.
     * @throws {Error} Si el método no está implementado.
     */
    async obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    /**
     * Obtiene un registro por su nombre oficial.
     *
     * @param {String} nombreOficial - El nombre oficial del registro a buscar.
     * @returns {Promise<Object|null>} Una promesa que resuelve al objeto encontrado o null si no existe.
     * @throws {Error} Si el método no está implementado.
     */
    async obtenerPorNombreOficial(nombreOficial) {
        throw new Error("Método 'obtenerPorNombreOficial()' no implementado");
    }

    /**
     * Crea un nuevo registro.
     *
     * @param {Object} data - Los datos del nuevo registro a crear.
     * @returns {Promise<Object>} Una promesa que resuelve al objeto recién creado.
     * @throws {Error} Si el método no está implementado.
     */
    async crear(data) {
        throw new Error("Método 'crear()' no implementado");
    }

    /**
     * Actualiza un registro existente por su nombre oficial.
     *
     * @param {String} nombreOficial - El nombre oficial del registro a actualizar.
     * @param {Object} datosActualizados - Los datos actualizados para el registro.
     * @returns {Promise<Object|null>} Una promesa que resuelve al objeto actualizado o null si no existe.
     * @throws {Error} Si el método no está implementado.
     */
    async actualizar(nombreOficial, datosActualizados) {
        throw new Error("Método 'actualizar()' no implementado");
    }

    /**
     * Elimina un registro por su nombre oficial.
     *
     * @param {String} nombreOficial - El nombre oficial del registro a eliminar.
     * @returns {Promise<Object>} Una promesa que resuelve al resultado de la operación de eliminación.
     * @throws {Error} Si el método no está implementado.
     */
    async eliminarPorNombre(nombreOficial) {
        throw new Error("Método 'eliminarPorNombre()' no implementado");
    }
}

// Exportación de la interfaz para su uso en otras partes de la aplicación
export default IRepository;