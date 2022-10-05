import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../Context/CartContext"


const CartWidget = () =>{

  const { cantidad } = useContext(CartContext);
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {

      return (<ShoppingCartOutlinedIcon/>)

  }

  return (

    <>

      {cantidad}
       <ShoppingCartOutlinedIcon/>

    </>

  )}

export default CartWidget;




