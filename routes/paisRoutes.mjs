import express from 'express';
import { eliminarPaisPorIdController,dashboardController,homeController ,mostrarFormularioNuevoPais,crearPaisController,mostrarFormularioEditarPais,actualizarPaisController} from '../controllers/paisControllers.mjs';
import{nuevoPaisValidationRules} from '../validation/validationRule.mjs'
import{handleValidationErrors} from '../validation/errorMiddleware.mjs'


const router = express.Router();

// Nueva ruta para el dashboard
router.get('/dashboard', dashboardController);

router.get('/pais/nuevo', mostrarFormularioNuevoPais);

router.post(
    '/pais',
    ...nuevoPaisValidationRules(), // ← Esto es importante
    handleValidationErrors,
    crearPaisController
);


router.get('/pais/:id/editar', mostrarFormularioEditarPais);

router.put(
    '/pais/:id',
    ...nuevoPaisValidationRules(),
    handleValidationErrors,
    actualizarPaisController
);


router.delete('/pais/:id', eliminarPaisPorIdController);

//endpoint para mostrar Pagina Principal
router.get('/home',homeController);

export default router;


