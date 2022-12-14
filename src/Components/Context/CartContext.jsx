import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();


const CartProvider = ({ children }) => {

const [cart, setCart] = useState ([]);

const [cantidad, setCantidad] = useState (0);

useEffect (() => { 

    let cantidad = 0;

    cart.forEach((producto) => cantidad = cantidad + producto.cantidad)

    setCantidad(cantidad);

}, [cart])

const addItem = (producto, cantidad) => {

    const isInCart = cart.findIndex(productoCart => productoCart.producto.id === producto.id);
 
    if (isInCart !== -1) {
 
        const newCart = cart.filter(producto => producto.id !== cart[isInCart])
         setCart([{producto,cantidad}, ...newCart])
 
     } else {
 
        setCart([...cart, {producto,cantidad}])
    }
 };


const removeItem = (id) => {

    const borrarProducto = cart.filter( producto => {
        return producto.producto.id !== id;
    });

    setCart(borrarProducto);
    
};

 const clear = () => {

    setCart([]);
};

const total = cart.reduce((acumulador, producto) => acumulador + producto.cantidad * producto.producto.precio, 0);

return (

    <CartContext.Provider value={{ addItem, removeItem, cantidad, cart, clear, total }}>
        {children}
    </CartContext.Provider>

)};

export default CartProvider;





