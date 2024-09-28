import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


function CartWidget (){
    return(
        <div className="cart">
            <FaShoppingCart />
            <span className="numCantidad">10</span>
        </div>
    )
}
export default CartWidget 