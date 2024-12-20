import {useContext} from "react";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {CartContext} from "../../Context/CartContext";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <a href="JavaScript:" className="cart-icon-container" onClick={toggleIsCartOpen}>
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">{cartCount}</span>
        </a>
    );
};

export default CartIcon;