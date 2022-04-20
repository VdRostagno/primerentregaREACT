import imagencarrito from "./imagenes/imagencarrito.png"
import contador from "./CartWidget"


const Nav = (props) => {
    //console.table(props.link)
    //console.log(props.id)
    //console.log(props.nombre)
    //console.log(props.footer)
    if(props.footer){
      return (
        <nav className="nav">
          <a href="#" className="nav__link">Inicio</a>
          <a href="#" className="nav__link">Carrito de compras</a>
        <a href="#" className="nav__link">Servicios</a>
      </nav>
    )
  }else{
    return(
      <nav className="nav">
        <a href="#" className="nav__link">Inicio</a>
        <a href="#" className="nav__link">Carrito de compras</a>
        <a href="#" className="nav__link">Servicios</a>
        <img src={imagencarrito}/> {contador}
      </nav>
    )
  }
   
  }
  export default Nav
  