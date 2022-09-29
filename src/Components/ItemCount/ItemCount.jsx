import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";


const ItemCount = ({ initial, stock, onAdd }) => {


  const [contador, setContador] = useState(initial);

  const [click, setClick] = useState();

  const sumar = () => contador < stock && setContador(contador + 1);

  const restar = () => contador > initial && setContador(contador - 1);


  const agregarCarrito = () => {

    setClick(1)
    setContador(contador);
    onAdd();

  }


  return (

    <> 
      

      { click === 1 ? 

        (<Link to={'/Carrito'}><Button variant="primary">Finalizar Compra</Button></Link>)

        :(<ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={sumar}>+</Button>
          <Button variant="secondary">{contador}</Button>
          <Button variant="secondary" onClick={restar}>-</Button>
          <Button variant="secondary" onClick={agregarCarrito}>Agregar al Carrito</Button>
        </ButtonGroup>)
      
      }

    </>
  )
}


export default ItemCount;