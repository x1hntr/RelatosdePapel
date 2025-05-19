import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Landing from "./pages/Landing";

import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Libro from "./components/Libro";



// import Checkout from "./pages/Checkout";
// import DetalleLibro from "./pages/DetalleLibro";
// import Libros from "./pages/Libros";

import Home from "./pages/Home";


function AppContent(){
  const isLanding = useLocation().pathname === "/";
 return (
    <>
      {!isLanding && <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/libro" element={<Libro />} />
        <Route path="/category/:categoria" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />

      </Routes>
      {!isLanding && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
