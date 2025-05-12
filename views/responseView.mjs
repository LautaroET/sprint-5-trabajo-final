export function renderizarPais(pais){
    return{
        id:pais.id,
        Nombre : pais.nombreSuperHeroe,
        "Nombre Real":pais.nombreReal,
        Edad:pais.edad,
        "Planeta de Origen": pais.planetaOrigen,
        Debilidad : pais.debilidad,
        Poderes:pais.poderes,
        Aliados:pais.aliados,
        Enemigos:pais.enemigos
    };
}
export function renderizarListaPais(pais){
    return pais.map(pais=>renderizarPais(pais));
};