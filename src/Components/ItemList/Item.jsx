import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";
import "./Item.css"


function Item({ product }) {

    return (

            <Card className="card" style={{ width: '12rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>"{product.titulo}"</Card.Title>
                    <Card.Text>{product.autor}</Card.Text>
                    <Link to={`/producto/${product.id}`} ><Button variant="primary">Ver más</Button></Link>
                </Card.Body>
            </Card>
    );
}
export default Item