import mongoose from "mongoose";

const paisSchema = new mongoose.Schema({
    name: {
        common: { type: String, required: true }, // Añadir validación required
        official: { type: String, required: true }, // Añadir validación required
        nativeName: {
            type: mongoose.Schema.Types.Mixed
        }
    },
    independent: Boolean,
    status: String,
    unMember: Boolean,
    currencies: {
        type: mongoose.Schema.Types.Mixed
    },
    capital: [String],
    region: String,
    subregion: String,
    languages: {
        type: mongoose.Schema.Types.Mixed
    },
    latlng: [Number],
    landlocked: Boolean,
    borders: [String],
    area: Number,
    flag: String,
    maps: {
        googleMaps: String,
        openStreetMaps: String
    },
    population: Number,
    gini: {
        type: mongoose.Schema.Types.Mixed
    },
    fifa: String,
    timezones: [String],
    continents: [String],
    flags: {
        png: String,
        svg: String,
        alt: String
    },
    startOfWeek: String,
    capitalInfo: {
        latlng: [Number]
    },
    creador: { type: String, default: 'Tapia Lautaro Exequiel' }
}, { collection: 'paises' }); 
const pais = mongoose.model('pais', paisSchema, 'Grupo-13');
export default pais;