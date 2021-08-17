import React from 'react'
import PokeList from '../components/PokeList/PokeList'
import SearchBar from '../components/SearchBar/SarchBar'

const List = () => {

  return (
    <main>
           <div style={{marginBottom: "100px"}}>
     <br/>
    </div>
    <PokeList url={'/list/'} />
  </main>
  )
}

export default List
