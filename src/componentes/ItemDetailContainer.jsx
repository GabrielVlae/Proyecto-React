import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div className="container-details">
      {producto ? (
        <div className="container-info">
          <div className="parte-izquierda">
            <img src={producto.imagen} alt={producto.nombre} />
          </div>
          <div className="parte-derecha">
            <h2>{producto.nombre}</h2>
            <hr />
            <p>{producto.descripcionLarga}</p>
            <p className="precio-details">${producto.precio}</p>
          </div>
        </div>
      ) : (
        "Cargando..."
      )}
    </div>
  )
}

export default ItemDetailContainer