import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import './cart-dropdown.styles.scss';

function CartDropdown() {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <div className="cart-dropdown-container">
            <ul className="cart-items">
                {cartItems.map((item => <CartItem cartItem={item} key={item.id} />))}
            </ul>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    );
}

export default CartDropdown;