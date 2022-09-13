import React from "react";
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) =>{


    const funcionOnAdd = () => {



    }


    return (
    
    <>
        <h1 style={styles.saludo}>{greeting}</h1> 
        <ItemCount initial ={1} stock={10} onAdd ={funcionOnAdd}/>
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