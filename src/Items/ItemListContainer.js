import React,{useEffect,useState} from "react";
import customFetch from "../Promesa/customFetch.js";
import {productos} from "../productos.js";
import ItemsList from "../Items/ItemsList";
import {useParams} from "react-router-dom"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";


function ItemsListContainer(){

    const [Item, setItem] = useState([]);
    const {category}= useParams();

    useEffect (() => {

        if (category) {
            customFetch(2000,productos)
                    .then(resultado => setItem(resultado.filter (Item => Item.estilo===category)))
                    .catch(error => console.log(error));
        }else {
            customFetch(2000,productos)
                    .then(resultado => setItem(resultado))
                    .catch(error => console.log(error));
           
        }

    },[category])

    return (

        <Container className="contenedor-productos">
        
            <Row xs={1} md={2}   className="g-4">

            <ItemsList productos={Item}/>

            </Row>
        
        </Container>
    )
}
export default ItemsListContainer; 