import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useNavigate } from 'react-router-dom'

const Pokemon = () => {
  const { nombresPokemon, seleccionPokemon, handleSelectorPokemon, mayuscula } = useContext(PokemonContext)
  const navigate = useNavigate()
  const alDetalle = () => {
    if (seleccionPokemon) {
      navigate(`/pokemon/${seleccionPokemon}`)
    } else {
      window.alert('Debes seleccionar un Pokemon')
    }
  }
  return (
    <>
      <div className='pokemon'>
        <h1>Selecciona un Pokemon</h1>
        <section>
          <select className='selectorPokemon' value={seleccionPokemon} onChange={({ target }) => handleSelectorPokemon(target.value)}>
            <option value='' disabled>Selecciona un Pokémon</option>
            {nombresPokemon.map(({ name }) => (
              <option key={name} value={name}>{mayuscula(name)}</option>
            ))}
          </select>
          <article>
            <button className='btn btn-primary' onClick={alDetalle}><strong>Ver Detalle</strong></button>
          </article>
        </section>
      </div>
    </>
  )
}

export default Pokemon
