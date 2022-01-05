import React, {useState} from 'react'

function Navbar() {
    return (
      
      <div className="navbar">
          <div className="navbar-logo">
          <li className="navbar-menu-elements">
          <a href='/' className="navbar-text">Alex.</a>
        </li>
          </div>
<ul className="navbar-menu">
        <li className="navbar-menu-elements">
          <a href='/about' className="navbar-text">Sobre</a>
        </li>
        <li className="navbar-menu-elements">
          <a href='/contact' className="navbar-text">Contactos</a>
        </li>
      </ul>

      </div>
    
      
    )
}

export default Navbar
