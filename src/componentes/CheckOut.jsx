import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext';
import { useForm } from 'react-hook-form';
import {collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import { EmojiSmile } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const CheckOut = () => {

    const { carrito, vaciarCarrito, calcularTotal, calcularCantidadProd } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    //! ARREGLAR LOS LINKS DE LAS IMAGENES

    if (docId) {
        return (
            <div className="compra-finalizada">
                <div className="contenido-compra">
                    <EmojiSmile className="icono-checkout"/>
                    <h1>Muchas gracias por tu compra</h1>
                    <p>Para hacer el seguimiento de tu pedido, el identificador es este: {docId}</p>
                    <Link to="/" className="btn-checkout">Volver a la tienda</Link>
                </div>
            </div>
        )
    }

  return (
    <div className="container-form">
        <form onSubmit={handleSubmit(comprar)}>

            <h2>Complete el formulario</h2>

            <input type="text" placeholder="Ingrese su nombre" {...register("nombre")}/>
            <input type="email" placeholder="Ingrese su email" {...register("email")}/>
            <input type="password" placeholder="Ingrese su contraseña" {...register("contraseña")}/>
            <button className="btn-form" type="submit">Comprar</button>
        </form>
    </div>
  )
}
