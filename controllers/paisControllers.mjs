import {obtenerTodosLosPaisService,eliminarPaisPorNombreService,crearPaisService,obtenerPaisePorNombreOficialService,actualizarPaisService} from '../services/paisService.mjs';

export async function dashboardController(req, res) {
    try {
        const paises = await obtenerTodosLosPaisService(); 
        res.render('dashboard', { title: 'Lista de Países', paises }); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los países', error: error.message });
    }
}

export function mostrarFormularioNuevoPais(req, res) {
    res.render('addPais',{ title: 'Agregar Nuevo Pais'});
}

export async function crearPaisController(req, res) {
    try {
        const nuevoPais = await crearPaisService(req.body);
        res.redirect('/api/dashboard'); 
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el país', error: error.message }); 
    }
}

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

export async function eliminarPaisPorNombreController(req, res) {
    const { nombreOficial } = req.params;
    try {
        const resultado = await eliminarPaisPorNombreService(nombreOficial);
        if (resultado.deletedCount === 0) {
            return res.status(404).json({ mensaje: 'País no encontrado' });
        }
        res.json({ mensaje: 'País eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el país', error: error.message });
    }
}

export function homeController(req, res) {
    res.render('index', { title: 'Pagina Principal' });
}

