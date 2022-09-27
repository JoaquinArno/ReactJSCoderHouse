import React from "react";
import Item from "./Item";

const ItemList = ({ listProducts }) =>{

    return (

        <>
           
           {listProducts.map((prod,i) => <Item key={`${prod.titulo}-${i}`} product={prod}/> )}

        </>
    )
}

export default ItemList