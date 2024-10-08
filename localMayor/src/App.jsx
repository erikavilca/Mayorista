import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Layout from "./paginas/Layout";
import Blog from "./paginas/Blog";
import NoPage from "./paginas/NoPage";
import Productos from "./paginas/Productos";
import ProductosDetallados from "./paginas/ProductosDetallados";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home nameGreeting={"Eriks"}/>}  />
            <Route path="blog" element={<Blog />} />
            <Route path="productos" element={<Productos />} />
            <Route path="productos/:id" element={<ProductosDetallados />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
