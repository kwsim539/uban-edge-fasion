import {useContext} from "react";

import Button, {BUTTON_TYPE_CLASSES} from '../Button/Button';
import {CartContext} from "../../Context/CartContext";
import {ProductCardContainer, ProductCardFooter, ProductCardName, ProductCardPrice, ProductCardMedia} from './product-card.styles';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addToCart} = useContext(CartContext);

    const handleAddToCart = () => addToCart(product);

    return (
        <ProductCardContainer>

            <ProductCardFooter>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>${price}</ProductCardPrice>
            </ProductCardFooter>
            <ProductCardMedia>
                <img src={imageUrl} alt={`${name}`} className=""/>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>Add to Cart</Button>
            </ProductCardMedia>

        </ProductCardContainer>
    );
};

export default ProductCard;