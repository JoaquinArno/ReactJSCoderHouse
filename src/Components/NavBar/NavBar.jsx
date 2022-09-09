import React from "react";
import logo from "../../Assets/Logo.png"
import "./NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () =>{

  const elementos = [
    
    { id:0, nombre:'Elemento1' },
    { id:1, nombre:'Elemento2' },
    { id:2, nombre:'Elemento3' }

  ]

  return (

    <header>

     <img src={logo} alt="logo"/>

     <h1>Parsifal</h1>

     <nav>
        <ul>
          <li> 
            {elementos.map((elemento) => {return <a key={elemento.id} href="">{elemento.nombre}</a>})}
          </li>
        </ul>
     </nav>

     <CartWidget/>

    </header>
  )
}

export default NavBar;