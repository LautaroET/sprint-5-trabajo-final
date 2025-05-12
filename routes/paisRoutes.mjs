import express from 'express';
import { eliminarPaisPorNombreController,dashboardController,homeController ,mostrarFormularioNuevoPais,crearPaisController,mostrarFormularioEditarPais,actualizarPaisController} from '../controllers/paisControllers.mjs';


const router = express.Router();

// Nueva ruta para el dashboard
router.get('/dashboard', dashboardController);

router.get('/pais/nuevo', mostrarFormularioNuevoPais);

router.post('/pais',crearPaisController);

router.get('/pais/:nombreOficial/editar', mostrarFormularioEditarPais);

router.put('/pais/:nombreOficial', actualizarPaisController);

router.delete('/pais/:nombreOficial', eliminarPaisPorNombreController);

//endpoint para mostrar Pagina Principal
router.get('/home',homeController);

export default router;


