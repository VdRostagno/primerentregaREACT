//import React from "react"
//Fragmento

//import React from "react"
//import {Fragment} from "react"

//<React.Fragment></React.Fragment>
//<Fragment></Fragment>

import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"

const App = () => {
  return (
    <>
     <Header/>

   <ItemListContainer greeting={"Bienvenido a mi E-comerce"}/> 
 
 <Footer/>      
    </>
  )
}

export default App
