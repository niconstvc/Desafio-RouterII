import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <Container className='text-center col-12 pt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src='https://lh3.googleusercontent.com/proxy/pOHYFqw1DW3_jYe5F4pmCxxReBo3KZ1Ga5-D1q8DY2WfWeuoeK9Urr-7OupKTF3msTXyi_l9-MNtx59gzua-RWHuFeHCI6MACTZahc-lKqui643uQilaDjTQUmj9GuLrnxIyY4gE3Msilcob0KVuaNmYkg9pS6EIObo' alt='404' style={{ width: '500px' }} />
        <button className='btn btn-primary' onClick={handleClick}><strong>Volver al Home</strong></button>
      </Container>
    </>
  )
}

export default NotFound
