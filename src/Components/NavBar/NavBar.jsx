import React from "react";
import logo from "../../Assets/Logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom";

const NavBar = () =>{

  const categorias = [
    
    { id:0, nombre:'Fantasía', ruta:'/categoria/Fantasía' },
    { id:1, nombre:'Ciencia Ficción', ruta:'/categoria/Ciencia Ficción' },
    { id:2, nombre:'Epopeya', ruta:'/categoria/Epopeya' }

  ]

  return (

    <header>

     <Link to={'/'}><img src={logo} alt="logo"/></Link>
     
     <h1>Parsifal</h1>

     <nav>
        <ul>
          <li> 
            {categorias.map((categoria) => {return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink>})}
          </li>
        </ul>
     </nav>

     <Link to={'/Carrito'}><CartWidget/></Link>

    </header>
  )
}

export default NavBar;