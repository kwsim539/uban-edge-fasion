import {useContext} from "react";
import './checkout-items.styles.scss';
import {CartContext} from "../../Context/CartContext";

const CheckoutItem = ({cartItem}) => {
    const {name, price, quantity, imageUrl} = cartItem;

    const {clearItemFromCart, addToCart, removeFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addToCartHandler = () => addToCart(cartItem);
    const removeFromCartHandler = () => removeFromCart(cartItem);

    return (
        <li className="checkout-item" key={cartItem.id}>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeFromCartHandler}>&#10094;</div>
                {quantity}
                <div className="arrow" onClick={addToCartHandler}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <button className="remove-button" onClick={clearItemHandler}>&#10005;</button>
        </li>
    );
};

export default CheckoutItem;