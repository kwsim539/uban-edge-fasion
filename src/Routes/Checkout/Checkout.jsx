import {useContext} from "react";
import {CartContext} from "../../Context/CartContext";
import CheckoutItem from "../../Components/CheckoutItem/CheckoutItem";

import {CheckoutContainer, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal, CheckoutItemContainer} from './checkout.styles'

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            <CheckoutItemContainer>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            </CheckoutItemContainer>
            <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
        </CheckoutContainer>
    )
}

export default Checkout;
