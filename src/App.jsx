import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/NavBar/ItemListContainer"

const App = () =>{

  const bienvenida = "Bienvenido a la librería online de los clásicos de la Literatura";
  
  return (
  <>

    <NavBar />

    <ItemListContainer greeting={bienvenida}/>



  </>
  )
}

export default App;
