import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ( {producto} ) => {
  return (
    <div className="card-producto">
      <img src={producto.imagen} />
      <div className="card-body">
        <h2>{producto.nombre}</h2>
        <hr />
        <p className="precio">${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <Link className="btn-productos" to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
  )
}