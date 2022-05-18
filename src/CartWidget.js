import React from "react";
import {useContext} from "react";
import {CartContext}  from "../CartContext.js";

export  default function CartWidget() {

    const {cantidadTotal} = useContext(CartContext)

    return(
        <>
<span className="material-icons"> shopping_cart </span>
        
({cantidadTotal()})
        </>
    )
}
