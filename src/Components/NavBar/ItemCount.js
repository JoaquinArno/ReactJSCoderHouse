import React, {useState} from 'react';
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {


    const [contador, setContador] = useState(initial);

    const sumar = () => contador < stock && setContador(contador + 1);

    const restar = () => contador > initial && setContador(contador - 1);


    const agregarCarrito = () => {

        setContador(contador);
        console.log(contador);
        onAdd();
    }


    return ( 
    
      <>

        <div class="itemCountContainer">
            <div class="itemCount">
   
               <button class="botonContador" id="suma" onClick={sumar}>+</button>
               <p>{contador}</p>  
               <button class="botonContador" id="resta" onClick={restar}>-</button>           
            </div>  
           <button class="botonCarrito" onClick={agregarCarrito}>Agregar al Carrito</button>
        </div>

      </>
    )   
}


export default ItemCount;