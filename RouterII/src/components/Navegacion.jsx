import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Navegacion = () => {
  const validateRoot = ({ isActive }) => isActive ? 'menu active' : 'menu'
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand onClick={handleClick}><img width='30' src='../src/assets/img/Location_icon.png' alt='localizador' /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink to='/' className={validateRoot}>Home</NavLink>
              <NavLink to='/pokemon' className={validateRoot}>Pokémon</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegacion
