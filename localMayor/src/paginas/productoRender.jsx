// quien se encarga de renderizarlos
import { Link } from "react-router-dom"


function ProductoRender({title, precioMayor, img, id}) {
  return (

    <Link to={`/productos/${id}`} className="ItemProd">
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <span>{precioMayor}</span>
    </Link>
  )
}

export default ProductoRender
