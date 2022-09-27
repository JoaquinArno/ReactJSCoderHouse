import React from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import Swal from 'sweetalert2'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';


const ItemDetail = ({ product }) => {

    const onAdd = () => {

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (

        <MDBCard className="cardContainer">
            <MDBRow className='g-0'>
                <MDBCol md='4'>
                    <MDBCardImage className="img" src={product.img} alt='imagenItem' fluid />
                </MDBCol>
                <MDBCol md='8'>
                    <MDBCardBody>
                        <MDBCardTitle>"{product.titulo}"</MDBCardTitle>
                        <MDBCardText>{product.descripcion}</MDBCardText>
                        <MDBCardText>
                            <small className='text-muted'><span> Autor: </span>{product.autor}</small>
                            <small className='text-muted'><span> | Páginas: </span>{product.paginas}<br /></small>
                            <small className='text-muted'><span>Tapa: </span>{product.tapa}</small>
                            <small className='text-muted'><span> | Páginas: </span>{product.paginas}</small>
                        </MDBCardText>

                        <MDBCardText><span>${product.precio}</span></MDBCardText>

                        <ItemCount initial={1} stock={10} onAdd={onAdd}/>

                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
        </MDBCard>

    )
}

export default ItemDetail