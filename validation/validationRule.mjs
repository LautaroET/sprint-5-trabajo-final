import { body } from "express-validator";

export const nuevoPaisValidationRules = () => [
    body('name.common')
        .notEmpty().withMessage('El nombre común es obligatorio')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre común debe tener entre 3 y 90 caracteres')
        .trim().escape().toLowerCase(),

    body('name.official')
        .notEmpty().withMessage('El nombre oficial es obligatorio')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre oficial debe tener entre 3 y 90 caracteres')
        .trim().escape(),

    body('name.nativeName.spa.official')
        .notEmpty().withMessage('El nombre nativo oficial es obligatorio')
        .isLength({ min: 3, max: 90 }).withMessage('El nombre nativo oficial debe tener entre 3 y 90 caracteres')
        .trim().escape(),

    body('capital')
        .customSanitizer(value => {
            if (typeof value === 'string') {
                return value.split(',').map(s => s.trim());
            }
            return value;
        })
        .isArray({ min: 1 }).withMessage('Debe ingresar al menos una capital'),

    body('capital.*')
        .isString().withMessage('Cada capital debe ser una cadena de texto')
        .isLength({ min: 3, max: 90 }).withMessage('Cada capital debe tener entre 3 y 90 caracteres')
        .trim().escape(),

    body('borders')
        .optional()
        .customSanitizer(value => {
        if (typeof value === 'string') {
            return value.split(',').map(s => s.trim().toUpperCase());
        }
            return value;
        })
    .isArray().withMessage('Las fronteras deben ser un arreglo'),

body('borders.*').optional()
    .isString().withMessage('Cada frontera debe ser una cadena de texto')
    .trim().escape()
    .matches(/^[A-Z]{3}$/).withMessage('Cada código de frontera debe tener exactamente 3 letras mayúsculas'),


    body('area')
        .notEmpty().withMessage('El área es obligatoria')
        .isInt({ min: 0 }).withMessage('El área debe ser un número entero positivo')
        .toInt(),

    body('population')
        .notEmpty().withMessage('La población es obligatoria')
        .isInt({ min: 0 }).withMessage('La población debe ser un número entero positivo')
        .toInt(),

    body('region')
        .notEmpty().withMessage('La región es obligatoria')
        .isLength({ min: 3, max: 90 }).withMessage('La región debe tener entre 3 y 90 caracteres')
        .trim().escape().toLowerCase(),

    body('subregion')
        .notEmpty().withMessage('La subregión es obligatoria')
        .isLength({ min: 3, max: 90 }).withMessage('La subregión debe tener entre 3 y 90 caracteres')
        .trim().escape().toLowerCase(),

    body('timezones')
        .customSanitizer(value => {
            if (typeof value === 'string') {
                return value.split(',').map(s => s.trim());
            }
            return value;
        })
        .isArray({ min: 1 }).withMessage('Debe incluir al menos una zona horaria'),

    body('timezones.*')
        .isString().withMessage('Cada zona horaria debe ser una cadena de texto')
        .isLength({ min: 4, max: 20 }).withMessage('Cada zona horaria debe tener entre 4 y 20 caracteres')
        .trim().escape(),

    body('flags.png')
        .notEmpty().withMessage('La URL de la bandera es obligatoria')
        .isString().withMessage('La URL de la bandera debe ser una cadena de texto')
        .isURL().withMessage('La URL de la bandera debe ser válida')
        .trim(),

    body('maps.googleMaps')
        .notEmpty().withMessage('La URL del mapa es obligatoria')
        .isString().withMessage('La URL del mapa debe ser una cadena de texto')
        .isURL().withMessage('La URL del mapa debe ser válida')
        .trim(),
];




