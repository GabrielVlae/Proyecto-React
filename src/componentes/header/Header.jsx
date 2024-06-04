import { Navbar } from "./Navbar"
import { Carrito } from './Carrito'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <header className="header">
        <Link to="/"><img src="/src/img/logo.png" alt="Logo" /></Link>
        <Navbar />
        <Carrito numeroCarrito={props.numeroCarrito}/>
    </header>
  )
}
