import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext';

export const Item = ( {producto} ) => {

  const {agregarCarrito} = useContext(CartContext);

  return (
    <div className="card-producto">
      <img src={producto.imagen} />
      <div className="card-body">
        <h2>{producto.nombre}</h2>
        <hr />
        <p className="precio">${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <div className="btns-cart">
          <Link className="btn-productos" to={`/item/${producto.id}`}>Ver más</Link>
          <button className="btn-productos" onClick={() => agregarCarrito(producto)} >Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

