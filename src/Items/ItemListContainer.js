import React,{useEffect,useState} from "react";
import customFetch from "../Promesa/customFetch.js";
import {productos} from "../productos.js";
import ItemsList from "../Items/ItemsList";
import {useParams} from "react-router-dom"



function ItemsListContainer(){

    const [Item, setItem] = useState([]);
    const {precio}= useParams();

    useEffect (() => {

        if (precio) {
            customFetch(2000,productos)
                    .then(resultado => setItem(resultado.filter ()))
                    .catch(error => console.log(error));
        }else {
            customFetch(2000,productos)
                    .then(resultado => setItem(resultado))
                    .catch(error => console.log(error));
           
        }

    },[precio])

    return (

       

            <ItemsList productos={Item}/>

    )
}
export default ItemsListContainer; 
