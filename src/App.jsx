import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/CartView/Cart";
import CartForm from "./Components/Form/CartForm";
import { products } from "./Assets/Products";
import CartProvider from "./Components/Context/CartContext";


const App = () =>{

  const bienvenida = "Bienvenido a la librería online de los clásicos de la Literatura";
  
  return (
  <>
    
      <BrowserRouter>
      <CartProvider>
      <NavBar product={ products }/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={bienvenida} />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={bienvenida} />} />
          <Route path='/producto/:idProducto' element={<ItemDetailContainer />} />
          <Route path='/Carrito' element={<Cart />} />
          <Route path='/FinalizarCompra' element={<CartForm />} />
        </Routes>
      </CartProvider>
      </BrowserRouter>

  </>
  )
}

export default App;
