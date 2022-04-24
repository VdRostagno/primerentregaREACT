import ItemListContainer from "./ItemListContainer";

const Main = ({ nombre }) => {

  return (
    <main>
      <h1>Hola, bienvenida {nombre}</h1>
      <span className="material-icons">
      </span>
      <ItemListContainer />
    </main>
  )
}

export default Main
