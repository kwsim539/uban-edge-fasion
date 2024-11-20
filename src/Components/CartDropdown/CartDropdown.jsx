import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import './cart-dropdown.styles.scss';

function CartDropdown() {
    const {cartItems} = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <ul className="cart-items">
                {cartItems.map((item => <CartItem cartItem={item} key={item.id} />))}
            </ul>
            <Button>Checkout</Button>
        </div>
    );
}

export default CartDropdown;