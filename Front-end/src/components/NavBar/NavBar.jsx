import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'react-dropdown/style.css';

import { Link } from 'react-router-dom'
import'./navbar.css'

const NavBar = () => { 


  return(
    <header className="cabecalho container">
     

      <nav className="menu-cabecalho">

        <ul className="menu-itens">
          
          <li><Link to="/" className="menu-item menu-item--entrar">Home</Link></li>
          <li><a href="/list" className="menu-item">Pokémon List</a></li>
          <li><Link to="/about" className="menu-item">About</Link></li>
         

          
        </ul>



      </nav>
      
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}


export default NavBar