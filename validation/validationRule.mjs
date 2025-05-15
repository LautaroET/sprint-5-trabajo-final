import { body } from "express-validator";

/**
 * Define las reglas de validación para la creación de un nuevo país.
 * Utiliza el middleware 'body' de 'express-validator' para especificar
 * las validaciones que se aplicarán a los diferentes campos del cuerpo
 * de la petición HTTP.
 *
 * @returns {Array} Un array de middlewares de validación para express-validator.
 */
export const nuevoPaisValidationRules = () => [
    /**
   * Valida el nombre común del país.
   * - No debe estar vacío.
   * - Debe tener una longitud entre 3 y 90 caracteres.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   * - Convierte el texto a minúsculas.
   */
    body('name.common')
    .notEmpty().withMessage('El nombre común es obligatorio')
    .isLength({ min: 3, max: 90 }).withMessage('El nombre común debe tener entre 3 y 90 caracteres')
    .trim().escape().toLowerCase(),

    /**
   * Valida el nombre oficial del país.
   * - No debe estar vacío.
   * - Debe tener una longitud entre 3 y 90 caracteres.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   */
    body('name.official')
    .notEmpty().withMessage('El nombre oficial es obligatorio')
    .isLength({ min: 3, max: 90 }).withMessage('El nombre oficial debe tener entre 3 y 90 caracteres')
    .trim().escape(),

    /**
   * Valida el nombre nativo oficial del país en español (spa).
   * - No debe estar vacío.
   * - Debe tener una longitud entre 3 y 90 caracteres.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   */
    body('name.nativeName.spa.official')
    .notEmpty().withMessage('El nombre nativo oficial es obligatorio')
    .isLength({ min: 3, max: 90 }).withMessage('El nombre nativo oficial debe tener entre 3 y 90 caracteres')
    .trim().escape(),

    /**
   * Valida la capital o las capitales del país.
   * - Utiliza un `customSanitizer` para manejar tanto cadenas de texto
   * separadas por comas como arrays. Si es una cadena, la divide en un array
   * eliminando espacios en blanco alrededor de cada capital.
   * - Debe ser un array con al menos un elemento (una capital).
   */
    body('capital')
    .customSanitizer(value => {
        if (typeof value === 'string') {
            return value.split(',').map(s => s.trim());
        }
            return value;
    })
    .isArray({ min: 1 }).withMessage('Debe ingresar al menos una capital'),

    /**
   * Valida cada elemento del array de capitales.
   * - Debe ser una cadena de texto.
   * - Debe tener una longitud entre 3 y 90 caracteres.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   */
    body('capital.*')
    .isString().withMessage('Cada capital debe ser una cadena de texto')
    .isLength({ min: 3, max: 90 }).withMessage('Cada capital debe tener entre 3 y 90 caracteres')
    .trim().escape(),

    /**
   * Valida las fronteras del país (opcional).
   * - Utiliza un `customSanitizer` para manejar tanto cadenas de texto
   * separadas por comas como arrays. Si es una cadena, la divide en un array,
   * elimina espacios en blanco y convierte cada código de frontera a mayúsculas.
   * - Debe ser un array si se proporciona.
   */
    body('borders')
    .optional()
    .customSanitizer(value => {
        if (typeof value === 'string') {
            return value.split(',').map(s => s.trim().toUpperCase());
        }
            return value;
    })
    .isArray().withMessage('Las fronteras deben ser un arreglo'),

    /**
   * Valida cada elemento del array de fronteras (opcional).
   * - Debe ser una cadena de texto.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   * - Debe coincidir con un patrón de 3 letras mayúsculas.
   */
    body('borders.*').optional()
    .isString().withMessage('Cada frontera debe ser una cadena de texto')
    .trim().escape()
    .matches(/^[A-Z]{3}$/).withMessage('Cada código de frontera debe tener exactamente 3 letras mayúsculas'),

    /**
   * Valida el área del país.
   * - No debe estar vacío.
   * - Debe ser un número entero mayor o igual a 0.
   * - Convierte el valor a un número entero.
   */
    body('area')
    .notEmpty().withMessage('El área es obligatoria')
    .isInt({ min: 0 }).withMessage('El área debe ser un número entero positivo')
    .toInt(),

    /**
   * Valida la población del país.
   * - No debe estar vacío.
   * - Debe ser un número entero mayor o igual a 0.
   * - Convierte el valor a un número entero.
   */
    body('population')
    .notEmpty().withMessage('La población es obligatoria')
    .isInt({ min: 0 }).withMessage('La población debe ser un número entero positivo')
    .toInt(),

  /**
   * Valida la región del país.
   * - No debe estar vacío.
   * - Debe tener una longitud entre 3 y 90 caracteres.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   * - Convierte el texto a minúsculas.
   */
    body('region')
    .notEmpty().withMessage('La región es obligatoria')
    .isLength({ min: 3, max: 90 }).withMessage('La región debe tener entre 3 y 90 caracteres')
    .trim().escape().toLowerCase(),

    /**
   * Valida la subregión del país.
   * - No debe estar vacío.
   * - Debe tener una longitud entre 3 y 90 caracteres.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   * - Convierte el texto a minúsculas.
   */
    body('subregion')
    .notEmpty().withMessage('La subregión es obligatoria')
    .isLength({ min: 3, max: 90 }).withMessage('La subregión debe tener entre 3 y 90 caracteres')
    .trim().escape().toLowerCase(),

    /**
   * Valida las zonas horarias del país.
   * - Utiliza un `customSanitizer` para manejar tanto cadenas de texto
   * separadas por comas como arrays. Si es una cadena, la divide en un array
   * eliminando espacios en blanco alrededor de cada zona horaria.
   * - Debe ser un array con al menos un elemento (una zona horaria).
   */
    body('timezones')
        .customSanitizer(value => {
        if (typeof value === 'string') {
            return value.split(',').map(s => s.trim());
        }
        return value;
    })
    .isArray({ min: 1 }).withMessage('Debe incluir al menos una zona horaria'),

/**
   * Valida cada elemento del array de zonas horarias.
   * - Debe ser una cadena de texto.
   * - Debe tener una longitud entre 4 y 20 caracteres.
   * - Elimina espacios en blanco al inicio y al final.
   * - Escapa caracteres HTML para prevenir ataques XSS.
   */
body('timezones.*')
    .isString().withMessage('Cada zona horaria debe ser una cadena de texto')
    .isLength({ min: 4, max: 20 }).withMessage('Cada zona horaria debe tener entre 4 y 20 caracteres')
    .trim().escape(),

    /**
   * Valida la URL de la bandera del país (en formato PNG).
   * - No debe estar vacío.
   * - Debe ser una cadena de texto.
   * - Debe ser una URL válida.
   * - Elimina espacios en blanco al inicio y al final.
   */
body('flags.png')
    .notEmpty().withMessage('La URL de la bandera es obligatoria')
    .isString().withMessage('La URL de la bandera debe ser una cadena de texto')
    .isURL().withMessage('La URL de la bandera debe ser válida')
    .trim(),

/**
   * Valida la URL del mapa de Google Maps del país.
   * - No debe estar vacío.
   * - Debe ser una cadena de texto.
   * - Debe ser una URL válida.
   * - Elimina espacios en blanco al inicio y al final.
   */
/*body('maps.googleMaps')
.o
    .notEmpty().withMessage('La URL del mapa es obligatoria')
    .isString().withMessage('La URL del mapa debe ser una cadena de texto')
    .isURL().withMessage('La URL del mapa debe ser válida')
    .trim(),*/
];




