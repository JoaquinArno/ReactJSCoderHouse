import React from "react";
import logo from "../../Assets/Logo.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import "./NavBar.css"

const Header = () =>{
  return (

    <header>

     <img src={logo} alt="logo"/>
     <h1>Parsifal</h1>

     <nav>
        <ul>
          <li><a href="">Elemento1</a></li>
          <li><a href="">Elemento2</a></li>
          <li><a href="">Elemento3</a></li>
        </ul>
     </nav>

     <ShoppingCartOutlinedIcon/>

    </header>
  )
}

export default Header;