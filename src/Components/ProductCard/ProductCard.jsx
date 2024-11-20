import {useContext} from "react";

import Button from '../Button/Button';
import {CartContext} from "../../Context/CartContext";
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addToCart} = useContext(CartContext);

    const handleAddToCart = () => addToCart(product);

    return (
        <div className="product-card-container">

            <div className="footer">
                <div className="name">{name}</div>
                <div className="price">${price}</div>
            </div>
            <div className="media">
                <img src={imageUrl} alt={`${name}`} className=""/>
            </div>
            <Button buttonType='inverted' onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;