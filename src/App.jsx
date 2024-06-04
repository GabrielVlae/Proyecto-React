import './componentes/css/main.css'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from './componentes/ItemListContainer'
import { Footer } from './componentes/Footer';
import { Header } from './componentes/header/Header';
import { NotFound } from './componentes/NotFound';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {

  const [numeroCarrito, setNumeroCarrito] = useState(1);

  return (
    <>
      <BrowserRouter>
      <Header numeroCarrito={numeroCarrito} setNumerito={setNumeroCarrito} />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>   
    </>
  )
}

export default App
