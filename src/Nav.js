import { Link } from 'react-router-dom'
import Badge from Cartwidget; 



const Nav = (props) => {
    //console.table(props.link)
    //console.log(props.id)
    //console.log(props.nombre)
    //console.log(props.footer)
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
        <Badge/>
        <Link href="#" className="nav__link">Inicio</Link>
        <Link href="#" className="nav__link">Carrito de compras</Link>
        <Link href="#" className="nav__link">Servicios</Link>
      </nav>
    )
  }
   
  }
  export default Nav
  