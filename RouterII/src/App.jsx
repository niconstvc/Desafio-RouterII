import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Pokemon, PokemonDetalles } from './views'
import PokemonContextProvider from './context/PokemonContext'
import Navegacion from './components/Navegacion'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <BrowserRouter>
      <>
        <PokemonContextProvider>
          <Navegacion />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='/pokemon/:name' element={<PokemonDetalles />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </PokemonContextProvider>
      </>
    </BrowserRouter>
  )
}

export default App
