import { connectDB } from './config/dbConfig.mjs';
import Pais from './models/pais.mjs';

/**
 * Función asíncrona para obtener datos de países desde una API externa,
 * filtrar los países de habla hispana, y guardarlos en la base de datos.
 */
async function getPais() {
    /**
     * Establece una conexión con la base de datos MongoDB utilizando la función connectDB.
     * Esta función debe estar definida en './config/dbConfig.mjs'.
     */
    await connectDB();

    /**
     * Realiza una llamada a la API de restcountries.com para obtener información de todos los países.
     * @type {Response}
     */
    const llamadaApi = await fetch("https://restcountries.com/v3.1/all");

    /**
     * Convierte la respuesta de la API a formato JSON.
     * @type {Array<Object>}
     */
    const data = await llamadaApi.json();

    /**
     * Procesa el array de datos de países para filtrar aquellos que tienen el español como uno de sus idiomas.
     * Además, extrae información relevante y añade un campo 'creador'.
     * @type {Array<Object>}
     */
    let paisesHispanohablantes = data.map(pais => {
        /**
         * Verifica si el país tiene la propiedad 'languages' y si dentro de ella existe la propiedad 'spa' (español).
         */
        if (pais.languages && pais.languages.spa) {
            /**
             * Utiliza la desestructuración de objetos para extraer propiedades específicas del objeto 'pais'
             * y agrupar el resto de las propiedades en la variable 'restoDelPais'.
             */
            const {
                translations,
                tld,
                cca2,
                ccn3,
                cca3,
                cioc,
                idd,
                altSpellings,
                car,
                coatOfArms,
                postalCode,
                demonyms,
                ...restoDelPais
            } = pais;
            /**
             * Retorna un nuevo objeto que contiene todas las propiedades restantes del país
             * y añade una nueva propiedad 'creador' con el valor 'Tapia Lautaro'.
             */
            return { ...restoDelPais, creador: 'Tapia Lautaro' };
        }
        /**
         * Si el país no tiene el español como idioma, retorna null para luego ser filtrado.
         */
        return null;
    })
    /**
     * Filtra el array 'paisesHispanohablantes' para eliminar los valores null (países que no hablan español).
     * @type {Array<Object>}
     */
    .filter(pais => pais !== null);

    /**
     * Inserta los países hispanohablantes filtrados en la colección 'Pais' de la base de datos.
     * @type {Object}
     */
    const result = await Pais.insertMany(paisesHispanohablantes);

    /**
     * Imprime en la consola un mensaje indicando que los países hispanohablantes fueron insertados exitosamente,
     * junto con la información del resultado de la operación de inserción.
     */
    console.log('Países hispanohablantes insertados exitosamente:', result);
}

/**
 * Llama a la función 'getPais' para iniciar el proceso de obtención y guardado de los países.
 */
getPais();