import {useState} from "react"



const ItemCount= ({init,stock,onAdd}) => {
  
    const [contador, setContador] = useState(0)
    
  
    const aumentarContador = () => {
      setContador(contador + 1)
    }
  
    const bajarContador = () => {
      setContador(contador - 1)
    }
  
    
    return (
      <div>
      {contador}
      <ItemCount stock="5" init="1"/>
        <button onClick={aumentarContador}>Aumentar</button>
        <button onClick={bajarContador}>Bajar</button>
      </div>
    )
  }

export default ItemCount