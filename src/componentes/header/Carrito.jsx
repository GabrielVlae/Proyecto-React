import React from 'react'
import { Cart } from 'react-bootstrap-icons'

export const Carrito = () => {
  return (
    <div className="container-carrito">
        <Cart className="icono-carrito"/><span>0</span>
    </div>
  )
}
