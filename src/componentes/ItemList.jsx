import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos} ) => {

  return (
    <div className="container-cards">
        {
          productos.length > 0 ?
          productos.map(producto => {
            return <Item key={producto.id} producto={producto} />
          })
          : <div className="container-load">
              <p className="load">Cargando productos...</p>
            </div>
        }
    </div>
  )
}