//1) Tener la variable react en scope
import React from "react"

//2) Tener la variable reactDOM en scope
//import ReactDOM from "react-dom"
import ReactDOM from "react-dom"
import {BrowserRouter} from 'react-router-dom';


import App from "./App"
import "./estilos.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>)