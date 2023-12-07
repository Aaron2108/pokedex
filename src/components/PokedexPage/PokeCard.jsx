import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const PokeCard = ({url}) => {

    const [pokemon, getPokemon] =  useFetch(url)

    const navigate = useNavigate()

    useEffect(() => {
        getPokemon()
    }, [])

    const handleNavigate = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }
return (
    <article className={`card_poke ${pokemon?.types[0].type.name}`} onClick={handleNavigate}>
        <header className={`header_poke ${pokemon?.types[0].type.name}`} style={{border:'none'}}>
            <img className="img_pokeCard" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="section_pokeCard">
            <h3 className="poke_name">{(pokemon?.name || '').toUpperCase()}</h3>
            <ul className="ul_poke">
                {
                    pokemon?.types.map(typeInfo =>(
                        <li key={typeInfo.type.url}>/{(typeInfo.type.name).toUpperCase()} /</li>
                    ))
                }
            </ul>
            <hr />
            <ul className="ul_pokeStats">
                {
                    pokemon?.stats.map(statInfo => (
                        <li key={statInfo.stat.url}>
                            <span className="stat_name">{(statInfo.stat.name).toUpperCase()}</span><br />
                            <span>{statInfo.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
        </section>
    </article>
)
}
export default PokeCard