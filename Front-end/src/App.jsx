import React from 'react'
import './assets/css/base/base.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'

import NavBar from './components/NavBar/NavBar'
import PokemonProfile from './paginas/PokemonProfile'
import List from './paginas/List'



function App() {
  return (
  <>
  <Router>

      <NavBar />

    
    <Switch>
      <Route exact path='/'> <Home /> </Route>
      <Route path='/list/'> <List /> </Route>
      <Route path='/about'> <Sobre /> </Route>
      <Route path='/pokemon/:name'> <PokemonProfile /> </Route>
     
      <Route> <Pagina404 />  </Route>
    
    </Switch>

    
  </Router>

  

  </>
  )
}


export default App
