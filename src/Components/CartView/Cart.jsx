import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import "./Cart.css"


const Cart = () =>{

    const { cart, removeItem, clear } = useContext(CartContext);

    const total = cart.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.producto.precio, 0);

    return (

        <>

            {cart.length === 0 ? (<h3>Tu carrito está vacío. Si queres agregar productos hace click<Link className="link" to='/'>aquí</Link>.</h3>)

                : (

                    <>

                        {cart.map((producto) => {

                            return (

                                <ListGroup className="container" key={producto.producto.id} as="ol">
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

                            )
                        })}

                        <Button className="boton" variant="secondary" active>Importe: ${total}</Button>
                        <Button className="boton" variant="danger" onClick={clear}>Vaciar Carrito</Button>
                        <Button className="boton" variant="primary">Finalizar Compra</Button>

                    </>
                )
            }
        </>
    )
}

export default Cart;