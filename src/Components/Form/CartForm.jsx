import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import { db } from "../../Firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./CartForm.css"

const CartForm = () => {

    const { cart, clear, total } = useContext(CartContext);

    const finalizarCompra = (nombre, email) => {

        const ventasCollection = collection(db, "Ventas");
        addDoc(ventasCollection, {
    
            comprador: nombre,
            correo: email,
            items: cart,
            fecha: serverTimestamp(),
            importe: total,
        })

        
    
        .then(result => {

            console.log(cart);
            swal("¡Tu compra se ha confirmado con exito!", "el ID de tu compra es " + result.id, "success");
            clear();
        })
    }



  return (
    <form onSubmit={ev => {

        ev.preventDefault();

        const nombre = ev.target.nombre.value;

        const email = ev.target.correo.value;

        finalizarCompra(nombre,email)
    }}>

          <FloatingLabel controlId="floatingPassword" label="Nombre y Apellido" className="etiqueta">
              <Form.Control className="campo" type="text" placeholder="Nombre y Apellido" name="nombre"/>
          </FloatingLabel>

          <FloatingLabel controlId="floatingInput" label="Email" className="mb-3 etiqueta">
              <Form.Control className="campo" type="email" placeholder="name@example.com" name="correo"/>
          </FloatingLabel>

          <Button className="botonForm" variant="primary" type="submit">Confirmar Compra</Button>
    </form>
  );
}

export default CartForm;


