import {CartItemContainer, CartItemImg, CartItemDetails, CartItemName, CartItemPrice} from './cart-item.styles';


const CartItem = ({cartItem}) => {
    const {name, price, quantity, imageUrl} = cartItem;
    return (
        <>
            <CartItemContainer>
                <CartItemImg src={imageUrl} alt={`${name}`}/>
                <CartItemDetails>
                    <CartItemName>{name}</CartItemName>
                    <CartItemPrice>{quantity} x ${price}</CartItemPrice>
                </CartItemDetails>
            </CartItemContainer>

        </>
    );
};

export default CartItem;