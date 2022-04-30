import CardWidget from "./CardWidget"
const NavBar = (props) => {
  if(props.footer){
    return (
      <nav className="nav">
        <a href="#" className="nav__link">Inicio</a>
        <a href="#" className="nav__link">Servicios</a>
        <a href="#" className="nav__link">Carrito de compras</a>
      </nav>
    )
  }else{
    return(
      <nav className="nav">
        <a href="#">{props.nombre}</a>
        <CardWidget/>
        <a href="#" className="nav__link">Inicio</a>
        <a href="#" className="nav__link">Servicios</a>
        <a href="#" className="nav__link">Carrito de compras</a>
      </nav>
    )
  }
}

export default NavBar
