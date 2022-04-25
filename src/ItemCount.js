import {useState} from "react"



const ItemCount= ({init, onAdd}) => {
  
    const [contador, setContador] = useState(init)
   
    const [confirmado,setConfirmado] = useState(false)
    
  
    const sumar = () => {
      setContador(contador+1)
    }
  
    const restar = () => {
      setContador(contador-1)
    }
  
    const confirmar = () => {
      setConfirmado(true)
    }
  
    if(!confirmado){
      return (
        <div>
          <p>Unidades a comprar : <contador stock={10} init={0} onAdd={onAdd} /></p>
          <button onClick={sumar} className="material-icons">Agregar</button>
          <button onClick={confirmar}>confirmar</button>
          <button onClick={restar} className="material-icons">Sacar</button>
        </div>
      )
    }else{
      return (
        <div>
          <p>Unidades a comprar : <contador stock={10} init={0} onAdd={onAdd}/></p>
          <button onClick={sumar} className="material-icons">Agregar</button>
          <button onClick={confirmar}>confirmar</button>
          <button onClick={restar} className="material-icons">Sacar</button>
          <p className="modal">Se confirmaron {contador} unidades!</p>
        </div>
      )
    }
  }

export default ItemCount