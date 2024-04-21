import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

const PokemonContextProvider = ({ children }) => {
  const [nombresPokemon, setNombresPokemon] = useState([])
  const [seleccionPokemon, setSeleccionPokemon] = useState('')
  const [datosPokemon, setDatosPokemon] = useState({})
  const obtenerNombres = async () => {
    const url1 = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025'
    try {
      const res1 = await fetch(url1)
      const pokeNombres = await res1.json()
      setNombresPokemon(pokeNombres.results)
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error)
    }
  }
  const obtenerDatos = async (name) => {
    const url2 = 'https://pokeapi.co/api/v2/pokemon'
    try {
      const res2 = await fetch(`${url2}/${name}`)
      const pokeDatos = await res2.json()
      const src = pokeDatos.sprites.other.home.front_default
      const stats = pokeDatos.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat
      }))
      const types = pokeDatos.types.map((e) => (e.type.name))
      const type1 = types[0]
      const type2 = types[1]
      const weight = pokeDatos.weight
      const id = pokeDatos.id
      const datos = { name, src, stats, type1, type2, weight, id }
      setDatosPokemon(datos)
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error)
    }
  }
  useEffect(() => {
    obtenerNombres()
  }, [])
  const handleSelectorPokemon = (pokemon) => {
    setSeleccionPokemon(pokemon)
  }
  const mayuscula = (tipo) => {
    const primerElemento = tipo.charAt(0).toUpperCase()
    const restoDelElemento = tipo.slice(1)
    const stringCompleto = primerElemento + restoDelElemento
    return stringCompleto
  }
  const globalState = { nombresPokemon, seleccionPokemon, handleSelectorPokemon, datosPokemon, mayuscula, obtenerDatos }
  return (
    <PokemonContext.Provider value={globalState}>{children}</PokemonContext.Provider>
  )
}
export default PokemonContextProvider
