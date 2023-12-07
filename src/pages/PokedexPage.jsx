import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import Header from "../components/PokedexPage/Header";
import { pagination } from "../utils/pagination";

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [typeSelected, setTypeSelected] = useState('allPokemons')

  const trainer = useSelector((store) =>store.trainer)

  const inputSearch =useRef()

  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'
  const [pokemons, getPokemons, getTypeApi]  =  useFetch(url)

  useEffect(() => {
    if(typeSelected === 'allPokemons'){
      getPokemons()
    }else{
      getTypeApi(typeSelected)
    }
  }, [typeSelected])
  
  const handleSearch = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
  }
  const pokeFilter = pokemons?.results.filter(poke =>poke.name.includes(inputValue))

  const [pokePage, setPokePage] = useState(1)
  const {pages, pokemonsInPage} = pagination(pokePage, pokeFilter)

  useEffect(() => {
      setPokePage(1)
  }, [url])
  

  return (
   <>
    <Header/>

    <div>
      <section className="container_types">
      <p className="welcome_trainer"><span className="welcome_span">Welcome {trainer}</span>, here you can find your favorite pokemon</p>

      <article className="article_types">
        <form className="form_types" onSubmit={handleSearch}>
          <input className="input_type" ref={inputSearch} type="text" />
          <button className="button_type">Search</button>
        </form>
      <SelectType setTypeSelected={setTypeSelected}/>
      </article>

      </section>

      <div className="pokeCards">
        {
          pokemonsInPage?.map(pokemons1 =>
            <PokeCard
            key={pokemons1.url}
            url={pokemons1.url}
            />
            )
        }
      </div>
    </div>
     {/* Paginacion */}

     <section className="pagination">
        {
            pages.map((page) =>( 
                <button   
                key={page}    
                onClick={()=> setPokePage(page)} 
                className={`buttonPages ${pokePage === page ? "pagesRed" : "pagesGreen"}`}
                >
                {page}
                </button> 
              
            ))
            
          }
        </section> 
    </>
  )
}
export default PokedexPage