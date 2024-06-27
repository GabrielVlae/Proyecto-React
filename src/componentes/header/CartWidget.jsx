import React, { useContext } from 'react'
import { BagFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext);

  return (
    <div className="container-carrito">
        <Link to="/carrito">
          <div className="carrito-home">
            <BagFill className="icono-carrito"/ > <span className="num-carrito">{calcularCantidad()}</span>
          </div>
        </Link>
    </div>
  )
}
