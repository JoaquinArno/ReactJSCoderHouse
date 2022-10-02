import React from "react";
import ItemDetail from "./ItemDetail"
import { customFetchDetail } from "../../Utils/customFetch";
import { useState, useEffect } from "react";
import { products } from "../../Assets/Products";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({});

    const { idProducto } = useParams();

    useEffect(() => {
        customFetchDetail(products, 100, parseInt(idProducto)).then((res) => setProduct(res));
    }, [idProducto]);

    return (

        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailContainer