import React from 'react'
import PokeList from '../components/PokeList/PokeList'
import SearchBar from '../components/SearchBar/SarchBar'

const List = () => {

  return (
    <main>
    <div className="container">
     <br/>
    </div>
    <PokeList url={'/list/'} />
  </main>
  )
}

export default List
