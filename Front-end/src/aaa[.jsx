import React from 'react'
import './assets/css/base/base.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Pagina404'

import NavBar from './components/NavBar/NavBar'
import Formulario from './components/Form/Form'



function App() {
  return (
  <>
  <Router>
    <NavBar />
    <Switch>
      <Route exact path='/'> <Home /> </Route>
      <Route path='/sobre'> <Sobre /> </Route>
      <Route path='/form'> <Formulario aoEnviar={aoEnviarForm}
 /> </Route>
      <Route> <Pagina404 />  </Route>
    
    </Switch>

    
  </Router>

  

  </>
  )
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App
