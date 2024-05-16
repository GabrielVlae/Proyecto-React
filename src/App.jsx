import './componentes/css/main.css'
import { ItemListContainer } from './componentes/ItemListContainer'
import { Header } from './componentes/header/Header'

function App() {

  const productos = "Aqui van los productos.";

  return (
    <>
      <Header />
      <ItemListContainer productos={productos}/>   
    </>
  )
}

export default App
