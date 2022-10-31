import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../Context/CartContext"
import "./CartWidget.css"


const CartWidget = () =>{

  const { cantidad } = useContext(CartContext);
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {

      return (<ShoppingCartOutlinedIcon className="cartWidget"/>)
 
  }

  return (

    <>

      {cantidad}
       <ShoppingCartOutlinedIcon className="cartWidget"/>

    </>

  )}

export default CartWidget;




