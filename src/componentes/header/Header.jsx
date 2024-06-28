import { Navbar } from "./Navbar"
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header">
        <Link to="/"><img src="./img/logo.png" alt="Logo" /></Link>
        <Navbar />
        <CartWidget />
    </header>
  )
}
