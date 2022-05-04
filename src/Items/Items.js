import React from "react"
import {Link} from "react-router-dom";


import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ItemCount from '../Items/ItemCount';


function Items({id,nombre,imagen,stock,precio}){
    return ( 
       
                    <Col >
                        <Card >
                            <Card.Id className="id-productos">{id}</Card.Id>
                            <Card.Img className="imagen-productos" variant="top" src={imagen} />
                            <Card.Body className="cuerpo">
                            <Card.Title className="nombre-productos">{nombre}</Card.Title>
                            <p> Stock Disponible: {stock}</p>
                            <Card.Precio className="precio-productos">{precio}</Card.Precio>
                            
                             <Button variant="outline-dark" className="boton-detalle" >Ver detalles</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                
    )
}
export default Items

