import React, { Fragment, useContext } from 'react'
import { CartContext } from './context/CartContext'
import { EmojiTear, XSquareFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Carrito = () => {

  const { carrito, eliminarDelCarrito, calcularTotal, vaciarCarritoAlerta, disminuirCantidad, aumentarCantidad } = useContext(CartContext);

  return (
    <div className="container-compras">
      {carrito.map((prod) => 
      <Fragment key={prod.id}>
            <div>
              <div className="cart-compras">

                <img className="img-carrito" src={prod.imagen} />

                <div>
                  <h1>Producto: {prod.nombre}</h1>
                  <p className="precio-carrito"><strong>Precio: </strong>{prod.precio * prod.cantidad}</p>
                </div>
                <div className="cantidad-prod">
                  <button className="btn-cantidad" onClick={() => { disminuirCantidad(prod)}}>-</button>
                  <p>{prod.cantidad}</p>
                  <button className="btn-cantidad" onClick={() => { aumentarCantidad(prod)}}>+</button>
                </div>
                <XSquareFill className="eliminar-prod" onClick={() => { eliminarDelCarrito(prod)}} />
              </div>
            </div>
      </Fragment>
      )} {
        carrito.length >= 1 ? 

        <> 
          <button className="btn-carrito" onClick={vaciarCarritoAlerta}>Vaciar el carrito</button> 
          <Link to="/finalizar-compra" className="btn-carrito">Finalizar compra</Link>
          <p className="total-carrito">Total de la compra ${calcularTotal()}</p> 
        </>:

        <div className="carrito-vacio">
          <EmojiTear className="icono-vacio"/>
          <h2>Carrito vacio</h2>
        </div>
      }
    </div> 
  )
}

export default Carrito