import React from "react"

import './App.css';

import {BrowserRouter,  Routes, Route} from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer"
import ItemListContainer from "./Items/ItemListContainer"
import ItemDetailContainer from './Items/ItemDetailContainer';
import CartContextProvider from "./CartContext";
import Cart from './Componentes/Cart'

function App() {

  return (
    
    <CartContextProvider>

      <BrowserRouter>

        <NavBar/>

          <Routes>    

            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/:category" element={<ItemListContainer />} />
            <Route exact path="/detalles/:id" element={<ItemDetailContainer />} />
            <Route exact path="/Cart" element={<Cart/>} />

            
          </Routes>

        <Footer/>

      </BrowserRouter>

    </CartContextProvider>
    
  );
}

export default App;
