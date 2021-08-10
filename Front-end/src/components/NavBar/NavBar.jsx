import React from 'react'
//import imagem from '../assets/img/doguito.svg'

import'./navbar.css'
import { Link } from 'react-router-dom'


const NavBar = () => { 
  return(
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone">
        </span>
      </div>
      <div className="cabecalho-container">
        <a href="/" className="flex flex--centro">


        </a>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">
          <li><Link to="/" className="menu-item menu-item--entrar">Home</Link></li>
          <li><Link to="/list" className="menu-item">Pokémon List</Link></li>
          <li><Link to="#" className="menu-item">Types</Link></li>
          <li><Link to="/about" className="menu-item">About</Link></li>

          
        </ul>

      </nav>
      
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}


export default NavBar