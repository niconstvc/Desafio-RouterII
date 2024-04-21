import { useContext } from 'react'
import { Card, CardBody, CardImg, CardTitle, Row, Col } from 'react-bootstrap'
import { PokemonContext } from '../context/PokemonContext'
import { useNavigate } from 'react-router-dom'

const CardPokemon = () => {
  const { datosPokemon } = useContext(PokemonContext)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/pokemon')
  }
  return (
    <>
      <section className='pokemonCard'>
        <Card className='Card'>
          <Row className='no-gutters'>
            <Col md={6}>
              <article className='img'>
                <CardImg className='pokemonCardImg' src={datosPokemon.src} alt={datosPokemon.name} />
              </article>
            </Col>
            <Col md={6}>
              <article className='pokemonDetails'>
                <CardBody className='card_body'>
                  <CardTitle className='text-capitalize'><strong className='text-capitalize'>Name</strong>:{' '}{datosPokemon.name}</CardTitle>
                  <ul>
                    <li><strong className='text-capitalize'>Pokemon N°</strong>:{' '}{datosPokemon.id}</li>
                    {datosPokemon.stats?.map((stat, i) => (
                      <li key={i}>
                        <strong className='text-capitalize'>{stat.name}</strong>:{' '}{stat.base}
                      </li>
                    ))}
                    <li><strong className='text-capitalize'>Types</strong>:{' '}<span className='text-capitalize'>{datosPokemon.type1}{' '}{datosPokemon.type2}</span></li>
                  </ul>
                </CardBody>
              </article>
            </Col>
          </Row>
        </Card>
      </section>
      <button className='btn btn-primary' onClick={handleClick}><strong>Volver a Selección</strong></button>
    </>
  )
}

export default CardPokemon
