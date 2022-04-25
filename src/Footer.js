import NavBar from './NavBar'

const Footer = () => {

  const edad = 24
  const saludo = () => { }
  const links = []
  //const footer = true

  return (
    <footer className="footer">
      <p>Copyright &copy; - 2022</p>
      <p>Todos los derechos reservados</p>
      <NavBar
        nombre="Virginia"
        apellido="Rostagno" 
        edad={edad} 
        onAdd={saludo}
        link={links} 
        footer
        />
    </footer>
  )
}

export default Footer
