import React from "react";
import ItemList from "./ItemList"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import Spinner from 'react-bootstrap/Spinner';
import "./Item.css"

const ItemListContainer = () =>{

    let { idCategoria } = useParams();

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

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
            .finally (()=>{setLoading(setLoading(false))})
        }
        
    }, [idCategoria]);

    return (
    
    <>
        { loading

          ? <Spinner animation="border" variant="primary" className="spinner"/>
          : <ItemList listProducts={listProducts}/>}
    </>

    )
}



export default ItemListContainer;