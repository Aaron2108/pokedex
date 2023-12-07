import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

const SelectType = ({setTypeSelected}) => {

    const url = 'https://pokeapi.co/api/v2/type/'

    const [types, getType ] = useFetch(url)

    useEffect(() => {
        getType()
    }, [])
    
    const handleChange = e => {
        setTypeSelected(e.target.value)
    }

  return (
    <div>
        <select className="select_type" onChange={handleChange}>
            <option value="allPokemons">All pokemons</option>
        {
                types?.results.map(typeInfo => (
                    <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}</option>
                ))
            }
        </select>
    </div>
  )
}
export default SelectType