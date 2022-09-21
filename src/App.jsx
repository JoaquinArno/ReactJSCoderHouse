import React from "react";
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/NavBar/ItemListContainer"
import ItemDetailContainer from "./Components/NavBar/ItemDetailContainer"

const App = () =>{

  const bienvenida = "Bienvenido a la librería online de los clásicos de la Literatura";
  
  return (
  <>

    <NavBar />

    <ItemListContainer greeting={bienvenida}/>
    <ItemDetailContainer />


  </>
  )
}

export default App;
