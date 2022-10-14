import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "../CartView/Cart.css"
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const CartItems = (producto) => {

    const { removeItem } = useContext(CartContext);

  return (

      <ListGroup className="container" as="ol">
          <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                  <div className="fw-bold">
                      {producto.producto.titulo}
                      <Badge className="cantidad" bg="primary" pill>
                          {producto.cantidad}
                      </Badge>
                  </div>
                  {producto.producto.autor}
              </div>
              <div className="ms-2 me-auto">
                  ${producto.producto.precio}
              </div>
              <Button variant="danger" onClick={() => removeItem(producto.producto.id)}>X</Button>
          </ListGroup.Item>
      </ListGroup>

  );
}

export default CartItems;