import React from "react";
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})

    useEffect (() => {

        const getItem = async () => {

            try {

                const respuesta = await fetch('https://api.itbook.store/1.0/books/9781617294136')
                const data= await respuesta.json()
                setProduct(data)

            }

            catch {

                console.error("Un error")

            }
        }

        getItem()

    }, [])


    return (

        <>

          <ItemDetail product={product} />

        </>
    )
}

export default ItemDetailContainer