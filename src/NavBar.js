import React from "react"
import {Link , NavLink} from 'react-router-dom'

const NavBar = ({footer,nombre}) => {
  if(footer){
    return (
      <nav className="contenedor-navbar">
        <Link to="/componentsmenu/inicio" className="nav__link">Inicio</Link>
        <Link to="/componentsmenu/servicios" className="nav__link">Servicios</Link>
        <Link to="/componentsmenu/carritodecompras" className="nav__link">Carrito de Compras</Link>
      </nav>
    )
  }else{
    return(
      <nav className="contenedor-navbar">
        <NavLink to="#">{nombre}</NavLink>
        <NavLink to="/componentsmenu/inicio" className="nav__link">Inicio</NavLink>
        <NavLink to="/componentsmenu/servicios" className="nav__link">Servicios</NavLink>
        <NavLink to="/componentsmenu/carritodecompras" className="nav__link">Carrito de Compras</NavLink>
      </nav>
    )
  }
}

export default NavBar