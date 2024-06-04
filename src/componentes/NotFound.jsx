import React from 'react'
import { EmojiFrown } from 'react-bootstrap-icons'

export const NotFound = () => {
  return (
    <div className="container-notfound">
      <EmojiFrown className="icono-notfound" />
      <span>404</span>
      <p>No se encontro la página</p>
    </div>
  )
}
