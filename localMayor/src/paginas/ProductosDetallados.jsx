import { useState } from "react";
import ProductoMayor from "./producto";
import { useParams } from "react-router-dom";

function ProductosDetallados() {
  const { id } = useParams();
  const producto = ProductoMayor.find((prod) => prod.id === parseInt(id));

  function agregadoCart() {
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: "se agrego al carrito",
      showConfirmButton: false,
      timer: 1100,
    });
  }

  return (
    <div className="box">
      <img src={producto.img} alt={producto.title} />
      <div className="item">
        <h3>{producto.title}</h3>
        <span>${producto.precioMayor}</span><br/>
        <button onClick={agregadoCart}>agregar</button>
      </div>
    </div>
  );
}

export default ProductosDetallados;
