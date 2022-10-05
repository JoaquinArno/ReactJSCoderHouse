import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


const Cart = () =>{

    const { cart, removeItem, clear } = useContext (CartContext);

    return (

        <>

            {cart.length === 0 ? (<h2>Tu carrito está vacío. Si queres agregar productos hace click<Link to='/'>aquí</Link>.</h2>)

                : (

                    <>

                        {cart.map((producto, id) => {

                            return (

                                <> 

                                <ListGroup key={`${producto.titulo}-${id}`} as="ol">
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{producto.titulo}</div>
                                            {producto.autor}
                                        </div>
                                        <div className="ms-2 me-auto">
                                            {producto.precio}
                                        </div>
                                        <Badge bg="primary" pill>
                                            {producto.cantidad}
                                        </Badge>
                                        <Button variant="danger" onClick={removeItem}>x</Button>
                                    </ListGroup.Item>

                                </ListGroup>

                                <Button variant="danger" onClick={clear}>Vaciar Carrito</Button>

                                </>

                            )
                        })}
                    </>
                )
            }
        </>
    )
}

export default Cart;