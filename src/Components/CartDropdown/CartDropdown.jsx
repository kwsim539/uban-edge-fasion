import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {CartContext} from "../../Context/CartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles';

function CartDropdown() {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            {
                cartItems.length ? (
                    <CartItems>
                        {cartItems.map((item => <CartItem cartItem={item} key={item.id}/>))}
                    </CartItems>)
                : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
            }
            {
                cartItems.length ? (
                    <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
                )
                : null}


        </CartDropdownContainer>
    );
}

export default CartDropdown;