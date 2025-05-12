import IRepository from './IRepository.mjs';
import Pais from '../models/Pais.mjs';

class PaisRepository extends IRepository {
    async obtenerTodos() {
        return await Pais.find();
        //return await Pais.find({ creador: 'Tapia Lautaro' });
    }
    async obtenerPorNombreOficial(nombreOficial) {
            return await Pais.findOne({ 'name.official': nombreOficial });
    }
    async crear(data) {
            const nuevoPais = new Pais(data);
            return await nuevoPais.save();
        }
    async actualizar(nombreOficial, datosActualizados) {
            return await Pais.findOneAndUpdate({ "name.official": nombreOficial  }, datosActualizados, { new: true });
        }
    async eliminarPorNombre(nombreOficial) {
        return await Pais.deleteOne({ 'name.official': nombreOficial });
    }
}


export default PaisRepository;



