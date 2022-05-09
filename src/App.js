import React from "react"

import { Routes, Route} from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./Items/ItemListContainer"
import ItemDetailContainer from './Items/ItemDetailContainer';

const App = () => {   

  return (    
  
    <>      
    <BrowserRouter>

<NavBar/>

  <Routes>    

    <Route exact path="/" element={<ItemListContainer />} />
    <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />

  </Routes>

<Footer/>

</BrowserRouter>
 
  
  </> 
  
    )}

    export default App