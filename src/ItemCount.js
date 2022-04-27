import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useState,useContext} from "react";


const ItemCount=({inicial,stock,prod}) => {

  const [contador,setContador] = useState(inicial);
  const {addCart} = useContext(CartContext)

  const [disabledMas,setDisabledMas] = useState(false);
  const [disabledMenos,setDisabledMenos] = useState(false);

  const aumentar = () =>{
      if (contador < stock){
          setDisabledMenos(false);
          setContador(contador + 1)
      } else {
          setDisabledMas(true);
      }
  };

  const restar = () =>{
      if (contador > inicial){
          setDisabledMas(false);
          setContador(contador - 1)
      } else{
          setDisabledMenos(true);
      }
  };
  const handleClick= () =>{
      addCart({...prod,cantidad:contador});
  }

  return (
  <Container>
      <ButtonGroup className="mb-2">
          <Button variant="outline-success" className="aumentar" onClick={aumentar}  disabled={disabledMas}>   +   </Button>
          <Button variant="outline-dark" className="contador" > {contador} </Button>
          <Button variant="outline-danger" className="restar"   onClick={restar}    disabled={disabledMenos}>  -   </Button>
      </ButtonGroup> 
      <br />
      <Button variant="outline-dark" className="boton-agregar" onClick={handleClick}>Agregar al carrito</Button>
  </Container>
);

}
export default ItemCount;
