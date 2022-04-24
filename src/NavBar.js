import { Link } from 'react-router-dom'
import Cardwidget from Cardwidget; 

const NavBar = (props) => {
    if(props.footer){
      return (
        <nav className="nav">
          <Link href="#" className="nav__link">Inicio</Link>
          <Link href="#" className="nav__link">Carrito de compras</Link>
          <Link href="#" className="nav__link">Servicios</Link>
      </nav>
    )
  }else{
    return(
      <nav className="nav">
        <Cardwidget/>
        <Link href="#" className="nav__link">Inicio</Link>
        <Link href="#" className="nav__link">Carrito de compras</Link>
        <Link href="#" className="nav__link">Servicios</Link>
      </nav>
    )
  }
   
  }
  export default NavBar
  