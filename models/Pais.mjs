// Importación de mongoose para definir el esquema y el modelo
import mongoose from "mongoose";

// Definición del esquema de un país
const paisSchema = new mongoose.Schema(
    {
        name: {
            common: { type: String, required: true }, // Nombre común del país, obligatorio
            official: { type: String, required: true }, // Nombre oficial del país, obligatorio
            nativeName: {
                type: mongoose.Schema.Types.Mixed // Nombre nativo del país (puede ser un objeto o un array)
            }
        },
        independent: Boolean, // Indica si el país es independiente
        status: String, // Estado del país (e.g., si es un estado soberano, no soberano, etc.)
        unMember: Boolean, // Indica si el país es miembro de las Naciones Unidas
        currencies: {
            type: mongoose.Schema.Types.Mixed // Divisas del país (puede ser un objeto o un array)
        },
        capital: [String], // Lista de capitales (puede haber más de una)
        region: String, // Región geográfica del país
        subregion: String, // Subregión geográfica del país
        languages: {
            type: mongoose.Schema.Types.Mixed // Idiomas hablados en el país
        },
        latlng: [Number], // Coordenadas geográficas (latitud y longitud)
        landlocked: Boolean, // Indica si el país es sin salida al mar
        borders: [String], // Países fronterizos con el país
        area: Number, // Área total del país en kilómetros cuadrados
        flag: String, // URL de la imagen de la bandera
        maps: {
            googleMaps: String, // Enlace a Google Maps
            openStreetMaps: String // Enlace a OpenStreetMaps
        },
        population: Number, // Población del país
        gini: {
            type: mongoose.Schema.Types.Mixed // Índice de Gini (desigualdad de ingresos)
        },
        fifa: String, // Código FIFA para el país
        timezones: [String], // Lista de zonas horarias
        continents: [String], // Continentes en los que se encuentra el país
        flags: {
            png: String, // Bandera en formato PNG
            svg: String, // Bandera en formato SVG
            alt: String // Bandera en formato alternativo
        },
        startOfWeek: String, // Día de la semana en que comienza la semana en el país
        capitalInfo: {
            latlng: [Number] // Coordenadas de la capital
        },
        creador: { 
            type: String, 
            default: 'Tapia Lautaro Exequiel' // Creador del registro, valor por defecto
        }
    },
    { collection: 'paises' } // Nombre de la colección en MongoDB
);

// Definición del modelo de "pais" usando el esquema creado
const pais = mongoose.model('pais', paisSchema, 'Grupo-13');

// Exportación del modelo para su uso en otros archivos
export default pais;
