import React from "react";
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { db } from "../../Firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({});

    const { idProducto } = useParams();

    useEffect(() => {
        const productCollection = collection (db, 'Products');
        const refDoc = doc(productCollection, idProducto)
        getDoc(refDoc)
        .then ((result)=>{
            setProduct({ id: result.idProducto, ...result.data()})
        })}, [idProducto]);

        
    return (

        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer