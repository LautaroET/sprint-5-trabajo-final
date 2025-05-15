// Importación de los servicios necesarios para interactuar con los datos de países
import {
    obtenerTodosLosPaisService,
    eliminarPaisPorIdService,
    crearPaisService,
    obtenerPaisePorNombreOficialService,
    actualizarPaisService
} from '../services/paisService.mjs';

/**
 * Controlador que maneja la vista del dashboard con la lista de países.
 * 
 * Obtiene todos los países a través del servicio correspondiente y los pasa a la vista
 * 'dashboard' para su visualización. En caso de error, responde con un mensaje adecuado.
 */
export async function dashboardController(req, res) {
    try {
        const paises = await obtenerTodosLosPaisService(); 
        res.render('dashboard', { title: 'Lista de Países', paises }); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los países', error: error.message });
    }
}

/**
 * Controlador que muestra el formulario para agregar un nuevo país.
 */
export function mostrarFormularioNuevoPais(req, res) {
    res.render('addPais', { title: 'Agregar Nuevo País' });
}

/**
 * Controlador que maneja la creación de un nuevo país.
 * 
 * Recibe los datos del nuevo país desde el cuerpo de la solicitud, los procesa mediante el servicio
 * correspondiente, y redirige al dashboard. Si ocurre un error, responde con un mensaje adecuado.
 */
export async function crearPaisController(req, res) {
    try {
        const nuevoPais = await crearPaisService(req.body);
        res.redirect('/api/dashboard'); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el país', error: error.message }); 
    }
}

/**
 * Controlador que muestra el formulario para editar un país existente.
 * 
 * Recibe el nombre oficial del país desde los parámetros de la URL, busca los detalles del país
 * con el servicio correspondiente, y pasa la información a la vista 'editPais'. Si el país no se
 * encuentra, devuelve un error 404.
 */
export async function mostrarFormularioEditarPais(req, res) {
    try {
        const { nombreOficial } = req.params;
        const pais = await obtenerPaisePorNombreOficialService(nombreOficial);
        if (!pais) {
            return res.status(404).send('País no encontrado');
        }
        res.render('editPais', { title: 'Modificar País', pais }); 
    } catch (error) {
        res.status(500).send('Error al cargar formulario de edición'); 
    }
}

/**
 * Controlador que maneja la actualización de un país existente.
 * 
 * Recibe el nombre oficial del país desde los parámetros de la URL y los datos actualizados del país
 * desde el cuerpo de la solicitud. Llama al servicio para actualizar el país y responde con un mensaje
 * adecuado. Si el país no se encuentra, devuelve un error 404.
 */
export async function actualizarPaisController(req, res) {
    try {
        const { nombreOficial } = req.params;
        const datosActualizados = req.body;

        const paisActualizado = await actualizarPaisService(nombreOficial, datosActualizados);

        if (!paisActualizado) {
            return res.status(404).json({ mensaje: 'País no encontrado' });
        }

        return res.json({ mensaje: 'País actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar el país', error: error.message }); 
    }
}

/**
 * Controlador que maneja la eliminación de un país.
 * 
 * Recibe el nombre oficial del país desde los parámetros de la URL, y llama al servicio correspondiente
 * para eliminarlo. Si el país no se encuentra, responde con un error 404. Si la eliminación es exitosa,
 * responde con un mensaje de éxito.
 */
export async function eliminarPaisPorIdController(req, res) {
    const { id } = req.params;
    try {
        const resultado = await eliminarPaisPorIdService(id);
        if (resultado.deletedCount === 0) {
            return res.status(404).json({ mensaje: 'País no encontrado' });
        }
        res.json({ mensaje: 'País eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el país', error: error.message });
    }
}

/**
 * Controlador que muestra la página principal del sitio.
 */
export function homeController(req, res) {
    res.render('index', { title: 'Página Principal' });
}


