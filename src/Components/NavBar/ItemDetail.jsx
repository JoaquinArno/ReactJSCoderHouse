import React from "react";
import "./ItemDetail.css"


const ItemDetail = ({product}) => {

    return (

        <div className="container">
            
            <h3>{product.title}</h3>
                
            <div className="itemDetailContainer">
                
                <img src={product.image} alt="imagenItem" className="imagen"/>
                <p>{product.desc}</p>

            </div> 

            <p className="precio">{product.price}</p>

        </div>
    )
}

export default ItemDetail