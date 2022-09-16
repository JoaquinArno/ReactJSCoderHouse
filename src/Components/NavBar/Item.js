import React from "react";
import "./Item.css"

const Item = ({product}) =>{

    return (

        <div className="cardConatainer">
         <div className="card">

             <img src={product.img} alt="tapa" />
             <p>"{product.titulo}"</p>
             <p>{product.autor}</p>
             <p className="precio">${product.precio}</p>

         </div>
        </div>
    )
}

export default Item