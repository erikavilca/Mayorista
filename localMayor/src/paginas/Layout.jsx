import { Link, Outlet } from "react-router-dom";
import CartWidget from "./CartWidget";

function Layout() {
  return (
    <>
      <header>
        <div>
          <h1>Galvic </h1>
          <span>Mercado Mayorista</span>
        </div>
        <input type="text" placeholder="Buscar productos.." />
        <CartWidget />
      </header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"productos"}>Productos</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
