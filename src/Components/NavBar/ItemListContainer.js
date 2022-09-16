import React from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { products } from "../../Assets/Products"
import { useState, useEffect } from "react";

const ItemListContainer = ({greeting}) =>{

    const promesa = (products) => {
        
        return new Promise((resolve, reject) => {

            setTimeout(() => {resolve(products)}, 2000)

        })
    }

    const [listProducts, setListProducts] = useState([])

    useEffect ( () => {

        promesa(products)
         .then(res => setListProducts(res))

    }, [])


    return (
    
    <>
        <h1 style={styles.saludo}>{greeting}</h1> 
        <ItemList listProducts={listProducts}/>
        <ItemCount initial={1} stock={10} onAdd={() => {}}/>
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