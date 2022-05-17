import React from "react"
import {Link} from "react-router-dom";
import {useState} from "react";
import {CartContext} from "../CartContext"


import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ItemCount from '../Items/ItemCount';
import Button from "react-bootstrap/Button";




function ItemDetail ({producto})  {

    const [Number,setNumber] = useState(0)

    const agregarCarrito = (cantidad) =>(
        setNumber(cantidad)
    )
    console.log(Number)
    
    // const context = useContext(CartContext)
    // const [addCart] = context;

    // const onAdd = () => {
    //     const item ={
    //         id,
    //         nombre,
    //         precio,
    //         estilo,
    //         stock
    //     }
    //     addCart(item)
    // }

    return (
        <>
        <Container className="div-nombre">
            <h1 className="h1-nombre">Detalles de {producto.nombre}</h1>
        </Container>
        <Container>
        <Col >
            <Card>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>

                    <Card.Text className="texto-carta">
                         <h3 className="precio">{producto.precio}</h3>

                        { 
                        Number <= 0 
                        ?
                        <ButtonGroup className="mb-2">
                            <ItemCount inicial={0} stock={producto.stock} prod={producto} agregarCarrito={agregarCarrito} />
                        </ButtonGroup> 
                        :
                        <ButtonGroup className="mb-2">
                            <Button variant="outline-dark" className="boton-agregar" > <Link to={"/cart"}>Ir al Carrito </Link></Button>
                        </ButtonGroup>
                        }

                        
                        <p className="stock">  Stock Disponible: {producto.stock}</p>
                        <Button variant="outline-dark" className="boton-volver" > <Link to={`/`}> Volver </Link></Button>
                        { <Button variant="outline-dark" className="boton-agregar"> <Link to={" "}>Agregar al Carrito </Link></Button> }
                    </Card.Text>

                </Card.Body>
            </Card>
         </Col>
         </Container>
        </>

    )
}
export default ItemDetail;
