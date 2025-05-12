import { body } from "express-validator";

export const nuevoPaisValidationRules=()=>[
    body('id').notEmpty().withMessage('ID de Pais Requerido'),
    body('nombrePais').trim().isLength({min:3,max:90}).withMessage('caracter necesario para nombre de Pais min=3 max=60'),
    body('nombreReal').trim().isLength({min:3,max:90}).withMessage('caracter necesario para nombre Real de super heroes min=3 max=60'),
    body('edad').isInt({ min: 0 }).withMessage('La edad debe ser un número entero igual o mayor a 0'),
];