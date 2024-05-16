import { Carrito } from './Carrito'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className="header">
        <h1>IronGYM</h1>
        <Navbar />
        <Carrito />
    </header>
  )
}
