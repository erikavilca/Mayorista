import { FaShoppingCart } from "react-icons/fa";


function CartWidget (){
    return(
        <div className="carrito">
            <FaShoppingCart size="20px"/>
            <span className="numCantidad">10</span>
        </div>
    )
}
export default CartWidget 