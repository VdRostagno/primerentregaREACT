import CardWidget from "./CardWidget"
import NavBar from "./NavBar"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__titlo">E-Commerce</h1>
      <span className="material-icons">
      <CardWidget/>
      </span>
      <NavBar footer={false}/>
    </header>
  )
}

export default Header

