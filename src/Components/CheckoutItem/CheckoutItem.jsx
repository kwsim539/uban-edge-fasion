import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";

import {
    CheckoutlistItem,
    CheckoutImageContainer,
    CheckoutItemImage,
    CheckoutItemName,
    CheckoutItemQuantity,
    CheckoutItemPrice,
    CheckoutArrow,
    CheckoutRemoveButton
} from './checkout-items.styles';

const CheckoutItem = ({cartItem}) => {
    const {name, price, quantity, imageUrl} = cartItem;

    const {clearItemFromCart, addToCart, removeFromCart} = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addToCartHandler = () => addToCart(cartItem);
    const removeFromCartHandler = () => removeFromCart(cartItem);

    return (
        <CheckoutlistItem key={cartItem.id}>
            <CheckoutImageContainer>
                <CheckoutItemImage src={imageUrl} alt={`${name}`}/>
            </CheckoutImageContainer>
            <CheckoutItemName>{name}</CheckoutItemName>
            <CheckoutItemQuantity>
                <CheckoutArrow onClick={removeFromCartHandler}>&#10094;</CheckoutArrow>
                {quantity}
                <CheckoutArrow onClick={addToCartHandler}>&#10095;</CheckoutArrow>
            </CheckoutItemQuantity>
            <CheckoutItemPrice>${price}</CheckoutItemPrice>
            <CheckoutRemoveButton onClick={clearItemHandler}>&#10005;</CheckoutRemoveButton>
        </CheckoutlistItem>
    );
};

export default CheckoutItem;