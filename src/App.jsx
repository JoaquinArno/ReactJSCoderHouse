import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/CartView/Cart";
import { products } from "./Assets/Products";


const App = () =>{

  const bienvenida = "Bienvenido a la librería online de los clásicos de la Literatura";
  
  return (
  <>
    
      <BrowserRouter>

        <NavBar product={ products }/>

        <Routes>
          <Route path='/' element={<ItemListContainer greeting={bienvenida} />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={bienvenida} />} />
          <Route path='/producto/:idProducto' element={<ItemDetailContainer />} />
          <Route path='/Carrito' element={<Cart />} />
        </Routes>


      </BrowserRouter>

  </>
  )
}

export default App;
