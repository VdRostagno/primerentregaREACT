import React from "react"

import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./Items/ItemListContainer"
import ItemDetailContainer from './Items/ItemDetailContainer';
import CartContextProvider from "./CartContext";

const App = () => {   

  return (    
  
    <>      

<CartContextProvider>

   <BrowserRouter>

<NavBar/>

  <Routes>    

    <Route exact path="/" element={<ItemListContainer />} />
    <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />

  </Routes>

<Footer/>

</BrowserRouter>

</CartContextProvider>

  
  </> 
  
    )}

    export default App