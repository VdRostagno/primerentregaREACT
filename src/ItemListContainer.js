//Importo ItemCount a modo de prueba a futuro pasara al detalle de cada producto

import ItemCount from "./ItemCount"
const ItemListContainer = ({greeting}) => {
  
  
  return (
 
 <div className="item__list">
 
 <p> {greeting} </p> 

 <ItemCount/>
 
 
 </div>
 
  )
 
 }

  export default ItemListContainer
  