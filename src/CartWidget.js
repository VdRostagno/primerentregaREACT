import { useState , useEffect } from "react"
import imagencarrito from "./imagenes/imagencarrito.png"


const Presentacional = (props) => {
  
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
      <button onClick={aumentarContador}>Aumentar</button>
      <button onClick={bajarContador}>Bajar</button>
    </div>
  )
}
export default Presentacional

