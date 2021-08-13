import React from 'react'
import PokeList from '../components/PokeList/PokeList'
import SearchBar from '../components/SearchBar/SarchBar'

const List = () => {

  return (
    <main>
    <div className="container">
      <h2 className="titulo-pagina"><SearchBar /></h2>
    </div>
    <PokeList url={'/list/'} />
  </main>
  )
}

export default List
