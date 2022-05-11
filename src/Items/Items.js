import React from "react"
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function Items({id,nombre,imagen,stock,precio}){
    return ( 
       
                    <Col>
                        <Card >
                            <Card className="id-productos">{id}</Card>
                            <Card className="imagen-productos" variant="top" src={imagen} />
                            <Card className="cuerpo">
                            <Card className="nombre-productos">{nombre}</Card>
                            <p> Stock Disponible: {stock}</p>
                            <Card className="precio-productos">{precio}</Card>
                            
                             <Button variant="outline-dark" className="boton-detalle" >Ver detalles</Button>
                            </Card>
                        </Card>
                    </Col>
                
    )
}
export default Items

