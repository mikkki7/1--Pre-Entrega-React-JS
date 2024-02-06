import { PiShoppingCartSimple } from "react-icons/pi";
import cartWidgetEstilos from "./CartWidget.module.css";

const CartWidget = () => {
    return (
        <div className={cartWidgetEstilos.contenedorCarrito}>
            <PiShoppingCartSimple className={cartWidgetEstilos.iconoCarrito}/>
            <div className={cartWidgetEstilos.contenedorContador}>
            <span>1</span>
            </div>
        </div>
    );
};

export default CartWidget;