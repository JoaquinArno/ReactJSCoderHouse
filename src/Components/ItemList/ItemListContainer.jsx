import React from "react";
import ItemList from "./ItemList"
import { products } from "../../Assets/Products"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetchCategory from "../../Utils/customFetchCategory";

const ItemListContainer = ({greeting}) =>{

    let { idCategoria } = useParams();

    const [listProducts, setListProducts] = useState([])

  
    useEffect(() => {
        customFetchCategory(products, 100, idCategoria).then((res) => setListProducts(res));
    }, [idCategoria]);


    return (
    
    <>
        <h1 style={styles.saludo}>{greeting}</h1> 
        <ItemList listProducts={listProducts}/>
    </>

    )
}

const styles = {

saludo: {

    fontStyle: 'oblique',
    fontSize: '24px',
    paddingTop: '25px',
    display: 'flex',
    justifyContent: 'center',
}
}

export default ItemListContainer;