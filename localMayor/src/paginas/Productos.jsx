import ProductoMayor from "./producto";
import ProductoRender from "./productoRender";
import "./Productos.css";

function Productos() {
  return (
    <div className="container">
      {ProductoMayor.map((prod) => (
        <ProductoRender key={prod.id} {...prod} />
      ))}
    </div>
  );
}

export default Productos;
