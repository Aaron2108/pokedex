import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import './css/homePage.css'
import './css/headerPoke.css'
import './css/pokedexPage.css'
import './css/typesPokemons.css'
import './css/pokeId.css'
import './css/pages.css'
function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />

        {/*Rutas protegidas*/}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>} />
          <Route path='/pokedex/:id' element={<PokedexIdPage/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
