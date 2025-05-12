import PaisRepository from '../repositories/PaisRepository.mjs';

const paisRepo = new PaisRepository();

export async function obtenerTodosLosPaisService() {
    return await paisRepo.obtenerTodos();
}

export async function crearPaisService(data) {
    return await paisRepo.crear(data);
}

export async function obtenerPaisePorNombreOficialService(nombreOficial) {
    return await paisRepo.obtenerPorNombreOficial(nombreOficial);
}

export async function actualizarPaisService(nombreOficial, datosActualizados) {
    return await paisRepo.actualizar(nombreOficial, datosActualizados);
}

export async function eliminarPaisPorNombreService(nombreOficial) {
    return await paisRepo.eliminarPorNombre(nombreOficial);
}





