import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Pedido from "./pages/pedido";
import Catalogo from "./pages/catalogo";
import Dashboard from "./pages/dashboard";
import Cliente from "./pages/cliente";
import CadastroItem from "./pages/catalogo/cadastro";
import EditCatalogo from "./pages/catalogo/edit";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/catalogo/:id" element={<EditCatalogo />} />
          <Route path="/catalogo/cadastro" element={<CadastroItem />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cliente" element={<Cliente />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
