import React from "react";

const ItemListContainer = ({greeting}) =>{

    return (

    <h1 style={styles.saludo}>{greeting}</h1> 

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