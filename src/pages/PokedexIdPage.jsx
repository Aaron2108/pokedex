import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Header from "../components/PokedexPage/header"

const PokedexIdPage = () => {

    const { id } = useParams()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const [pokemon, getPoke] = useFetch(url)

    useEffect(() => {
        getPoke()
    }, [id])
    

    console.log(pokemon);
  return (
    <>
    <Header/>

    <section className="section_cardId">
    <div className={`div_imgId ${pokemon?.types[0].type.name}`}>
        <img className="imgId" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
    </div>

    <article className="article_pokeId">
    <span className="span_pokeId">#{pokemon?.id}</span>
        <div className="container_pokeId">
        <h1 className="h1_pokeName">{(pokemon?.name || '').toUpperCase()}</h1>
        <ul className="ul_pokeId">
          <li>Peso <br />{pokemon?.weight}</li>
          <li>Altura <br />{pokemon?.height}</li>
        </ul>
        </div>
    </article>

    <article className="article_pokeType">
      <div>
        <h2>Tipo</h2>
        <div className="div_pokeType">
        {
          pokemon?.types.map(pokeType =>(
            <li className="li_pokeId" key={pokeType.type.name}>{(pokeType.type.name).toUpperCase()}</li>
          ))
        }
        </div>
      </div>
      <div>
        <h2>Habilidades</h2>
        <div className="div_pokeType">
        {
          pokemon?.abilities.map(pokeAbi =>(
            <li className="li_pokeId" key={pokeAbi.ability.name}>{(pokeAbi.ability.name).toUpperCase()}</li>
          ))
        }
        </div>
      </div>
    </article>

    <section className="section_stats">
      <h3 className="h3_stats">Stats</h3>
      <hr />
    </section>
    <div className="div_pokestat">
    {
          pokemon?.stats.map(pokestat => (
            <>
            <ul key={pokestat.stat.name} className="ul_pokestat">
            <li >{pokestat.stat.name}</li>
            <li>{pokestat.base_stat} / 150</li>
            </ul>
            <div style={{ background: `linear-gradient(to right, #FCD676, #E6901E ${pokestat.base_stat}%, transparent 0%)` }}className="barra_stadict"></div>
            </>
            
          ))
    }
    </div>
    </section>
    </>
  )
}
export default PokedexIdPage