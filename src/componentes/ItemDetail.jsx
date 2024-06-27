import React, { useContext } from 'react'
import { CartContext } from './context/CartContext';

export const ItemDetail = ( { producto } ) => {

  const { agregarCarrito } = useContext(CartContext);

  return (
    <div className="container-details">

      <div className="container-info">
          <div className="parte-izquierda">
            <img src={producto.imagen} alt={producto.nombre} />
            </div>
          <div className="parte-derecha">
            <h2>{producto.nombre}</h2>
            <hr />
            <p>{producto.descripcionLarga}</p>
            <p className="precio-details">${producto.precio}</p>
            <button className="btn-productos detail" onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>
          </div>
        </div>
    </div>
  )
}
