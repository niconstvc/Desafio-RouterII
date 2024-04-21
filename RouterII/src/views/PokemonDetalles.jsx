import { useParams } from 'react-router-dom'
import CardPokemon from '../components/CardPokemon'
import { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/PokemonContext'

const PokemonDetalles = () => {
  const { name } = useParams()
  const { obtenerDatos } = useContext(PokemonContext)
  useEffect(() => {
    obtenerDatos(name)
  }, [name, obtenerDatos])
  return (
    <>
      <div className='detalles'><CardPokemon /></div>
    </>
  )
}

export default PokemonDetalles
