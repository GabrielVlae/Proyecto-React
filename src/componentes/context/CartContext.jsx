import { createContext, useState } from "react"
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const toastCompra = () => {
    toast.success("Producro agregado", {
      theme: "dark",
      position: "bottom-right",
      hideProgressBar: false,
      autoClose: 1300,
      closeOnClick: true,
    });
  }
  
  const [carrito, setCarrito] = useState([]);
  
  const agregarCarrito = (producto) => {

      toastCompra()

      const productoEncontrado = carrito.find(prod => prod.id === producto.id);

      if (productoEncontrado) {
          setCarrito(carrito.map(prod =>
              prod.id === producto.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
          ));
      } else {
          setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      }
    }

    const vaciarCarritoAlerta = () => {
      const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn-aceptar",
              cancelButton: "btn-cancelar"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Vaciar carrito?",
            text: "Estas seguro de vaciar todo el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar!",
            cancelButtonText: "Cancelar",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Carrito vaciado",
                text: "se vacio con exito",
                icon: "success"
              });

              vaciarCarrito()
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "cancelado",
                text: "Su carrito no a sido vaciado",
                icon: "error"
              });
            }
          });
    }

    const vaciarCarrito = () => {
      setCarrito([]);
    }

    const eliminarDelCarrito = (producto) =>  {
      setCarrito(carrito.filter(prod => prod.id !== producto.id));
    }

    const calcularTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0).toFixed(2);
    }

    const calcularCantidad = () => {
      return carrito.length;
    }

    const aumentarCantidad = (producto) => {
      setCarrito(carrito.map(prod => {
          if (prod.id === producto.id) {
              return { ...prod, cantidad: prod.cantidad + 1 };
          }
          return prod;
      }));
  }

  const  disminuirCantidad= (producto) => {
      setCarrito(carrito.map(prod => {
          if (prod.id === producto.id && prod.cantidad > 1) {
              return { ...prod, cantidad: prod.cantidad - 1 };
          }
          return prod;
      }));
  }

    return (

    <CartContext.Provider value={ { carrito, agregarCarrito, calcularCantidad, vaciarCarrito, eliminarDelCarrito, calcularTotal, vaciarCarritoAlerta, aumentarCantidad, disminuirCantidad, toastCompra } }>
        {children}
    </CartContext.Provider>

    )

}