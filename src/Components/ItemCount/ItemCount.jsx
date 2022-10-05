import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const ItemCount = ({ initial, stock, onAdd }) => {


  const [contador, setContador] = useState(initial);


  const sumar = () => contador < stock && setContador(contador + 1);

  const restar = () => contador > initial && setContador(contador - 1);


  const agregarCarrito = (contador) => {

    setContador(contador);
    onAdd(contador);

  }


  return (
    
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={sumar}>+</Button>
          <Button variant="secondary">{contador}</Button>
          <Button variant="secondary" onClick={restar}>-</Button>
          <Button variant="secondary" onClick={() => agregarCarrito(contador)}>Agregar al Carrito</Button>
        </ButtonGroup>
  )
}


export default ItemCount;