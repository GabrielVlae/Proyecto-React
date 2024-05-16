import React from 'react'

export const ItemListContainer = (props) => {
  return (
    <div className="container-productos">
      <h2 className="titulo-productos">{props.productos}</h2>
    </div>
  )
}
