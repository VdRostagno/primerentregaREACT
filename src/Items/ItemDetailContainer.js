import customFetch from "../Promesa/customFetch.js";
import {productos} from "../productos.js";
import React, {useEffect, useState} from "react";
import ItemDetail from "../Items/ItemDetail"

import {useParams} from "react-router-dom"




function ItemDetailContainer() {

    const [productito,setProductito] = useState([])
    const {id}= useParams();

    useEffect ( () => {
            customFetch(2000,productos)
                .then(resultado => setProductito(resultado.find (productito => productito.id=== Number(id))))
                .catch(error => console.log(error));

    },[id])
    

    return (
        <>
            <ItemDetail producto={productito}/>          
        </>
    )
}
export default ItemDetailContainer;