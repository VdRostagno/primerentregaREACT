import React from "react"


import Header from "./Header"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./Items/ItemListContainer"

const App = () => {   

  return (    
  
    <>      
  
  <NavBar/>
  
   <ItemListContainer greeting={"Bienvenido a mi E-Commerce"} />    
   
  <Footer/>      
  
  </> 
  
    )}

    export default App