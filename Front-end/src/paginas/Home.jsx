import React from 'react'
import PokeList from '../components/PokeList/PokeList'

import SearchBar from '../components/SearchBar/SarchBar'

const Home = () => {

  return (
    <main>
      
    <div className="container">
    <h2 className="titulo-pagina">Welcome to the Pokémon Center!</h2>
    
      <h2 className="titulo-pagina"><SearchBar /></h2>
    </div>

  
  </main>
  )
}

export default Home
