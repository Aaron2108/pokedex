export  const pagination = (currentPage, pokemones) => {

    //*Excepcion para el primer render
    if(!pokemones){
        return {
            pages: [1],
            pokemonsInPage: []
        }
    }

    //*cantidad de pokemons por pagina
    const cantidad = 8

    //*Cantidad total de paginas totales
    const totalPages = Math.ceil(pokemones.length / cantidad)

    //* Residentes que van a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * cantidad
    const sliceEnd = sliceStart + cantidad
    const pokemonsInPage = pokemones.slice(sliceStart, sliceEnd);

    //*Generacion del arreglo de las paginas que se van a mostrar
    const pages = []
    for(let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    return {
        pokemonsInPage,
        pages
    }

}
