import React from 'react'
import { Cart } from 'react-bootstrap-icons'

export const Carrito = (props) => {
  return (
    <div className="container-carrito">
        <Cart className="icono-carrito"/> {props.numeroCarrito}
    </div>
  )
}
