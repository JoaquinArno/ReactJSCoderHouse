import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { db } from "../../Firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import "./CartForm.css"

const CartForm = () => {

    const { cart, clear, total } = useContext(CartContext);

    const finalizarCompra = (nombre, email) => {

        const ventasCollection = collection(db, "Ventas");
        addDoc(ventasCollection, {
    
            comprador: nombre,
            Correo: email,
            fecha: serverTimestamp(),
            items: cart,
            importe: total,
        })
    
            .then(result => {
    
                console.log(result.id);
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

          <Button className="boton" variant="primary" type="submit">Confirmar Compra</Button>
    </form>
  );
}

export default CartForm;



 // const finalizarCompra =(nombre, email) =>{
        
    //     let itemsForDB = cart.map (producto => ({
    //         id: producto.id,
    //         titulo: producto.titulo,
    //         autor: producto.autor,
    //         precio: producto.precio,
    //         cantidad: producto.cantidad,
    //     }))
    
    //     let order ={
    
    //         comprador: nombre,
    //         correo: email,
    //         fecha: serverTimestamp(),
    //         items: itemsForDB,
    //         importe: total(),
    //     }
    
    //     const createOrderInFirestore = async () =>{    
        
    //         const newOrderRef = doc(collection(db,"Ventas"))   
    //         await setDoc(newOrderRef, order)
    //         return newOrderRef
    //     }
        
    //     createOrderInFirestore()
    //         .then(result => alert('Tu pedido ha sido realizado con Exito, el ID de tu compra es ' + result.id))
    //         .then (clear())
    // } 



