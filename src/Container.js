import ItemListContainer from "./Itemlistcontainer"

const Container = () => {

  const usuarios = ["Juan","Pedro","Maria","Ana"]

  return (
    <ItemListContainer usuarios={usuarios} />
  )
}

export default Container