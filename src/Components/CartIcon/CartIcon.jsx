import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer href="JavaScript:" onClick={toggleIsCartOpen}>
         <ShoppingIcon className="shopping-icon" />
         <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;