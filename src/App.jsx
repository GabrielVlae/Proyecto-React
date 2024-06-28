import './componentes/css/main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from './componentes/ItemListContainer'
import { Footer } from './componentes/Footer';
import { Header } from './componentes/header/Header';
import { NotFound } from './componentes/NotFound';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { CartProvider } from './componentes/context/CartContext';
import { Carrito } from './componentes/Carrito';
import { CheckOut } from './componentes/CheckOut';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notify = () => toast("Wow so easy!");

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/finalizar-compra" element={<CheckOut />} />
            <Route path="/*" element={<NotFound />}/>
          </Routes>
          <ToastContainer />
          <Footer />
        </BrowserRouter>
      </CartProvider>   
    </>
  )
}

export default App
