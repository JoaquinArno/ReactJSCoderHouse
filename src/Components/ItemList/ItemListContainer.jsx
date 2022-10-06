import React from "react";
import ItemList from "./ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) =>{

    let { idCategoria } = useParams();

    const [listProducts, setListProducts] = useState([])

    useEffect(() => {

        const productsCollection = collection(db, 'Products');


        if (idCategoria) {

            const queryCategoria = query(productsCollection, where('categoria', '==', idCategoria))
            getDocs(queryCategoria)
            .then(res => setListProducts(res.docs.map(product => ({id: product.id, ...product.data()}))))

        } else {

            getDocs(productsCollection)
            .then((data)=>{
                const lista = data.docs.map((product)=>{
                    return {...product.data(),id: product.id}
                })
    
                setListProducts(lista)})
        }
        
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