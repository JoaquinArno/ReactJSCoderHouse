import React from "react";
import logo from "../../Assets/Logo.png"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NavBar = ({greeting}) =>{

  const categorias = [
    
    { id:0, nombre:'Fantasía', ruta:'/categoria/Fantasía' },
    { id:1, nombre:'Ciencia Ficción', ruta:'/categoria/Ciencia Ficción' },
    { id:2, nombre:'Tragedias y Comedias', ruta:'/categoria/Tragedias y Comedias' }

  ]

  return (

    <>

      <Navbar bg="dark" className="navSuperior">
        <Container className="navContainer">
          <Navbar.Brand className="navLogo">
          <Link to={'/'}><img src={logo} width="140" height="75" className="d-inline-block align-top" alt="React Bootstrap logo"/></Link>
          </Navbar.Brand>
        </Container>
        <h1 className="saludo">{greeting}</h1> 
      </Navbar>

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Parsifal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link><Link to={'/'}>Inicio</Link></Nav.Link>
              <NavDropdown title="Géneros" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  {categorias.map((categoria) => { return <NavLink key={categoria.id} to={categoria.ruta}>{categoria.nombre}</NavLink> })}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to={'/Carrito'}><CartWidget /></Link>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Buscar por título o autor" className="me-2" aria-label="Search"/>
              <Button>Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>


  )
}

export default NavBar;