import { connectDB } from './config/dbConfig.mjs';
import Pais from './models/pais.mjs';

async function getPais() {
    await connectDB();
    const llamadaApi = await fetch("https://restcountries.com/v3.1/all");

    const data = await llamadaApi.json();

    let paisesHispanohablantes = data.map(pais => {
            if (pais.languages && pais.languages.spa) {
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
                return { ...restoDelPais, creador: 'Tapia Lautaro' };
            }
            return null; 
        })
        .filter(pais => pais !== null);
    const result = await Pais.insertMany(paisesHispanohablantes);
    console.log('Países hispanohablantes insertados exitosamente:', result);
}

getPais();