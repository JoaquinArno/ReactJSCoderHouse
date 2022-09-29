import React from "react";
import ItemDetail from "./ItemDetail"
import customFetchDetail from "../../Utils/customFetchDetail";
import { useState, useEffect } from "react";
import { products } from "../../Assets/Products";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({});

    const [productList, setProductList] = useState([]);

    const { idProducto } = useParams();

    const addProd = () => {
        
        setProductList([...productList, product]);

    }
    
    
  
    useEffect(() => {
        customFetchDetail(products, 100, parseInt(idProducto)).then((res) => setProduct(res));
    }, [idProducto]);

    return (

        <>

            <ItemDetail product={product} addProd={addProd} productList={productList} />
 
        </>
    )
}

export default ItemDetailContainer