import ProductoMayor from "./producto";
import { useParams } from "react-router-dom";

function ProductosDetallados() {
  const { id } = useParams();
  const producto = ProductoMayor.find((prod) => prod.id === parseInt(id));

  return (
    <div className="box">
      <img src={producto.img} alt={producto.title} />
      <div className="item">
        <h3>{producto.title}</h3>
        <span>${producto.precioMayor}</span>
      </div>
    </div>
  );
}

export default ProductosDetallados;
