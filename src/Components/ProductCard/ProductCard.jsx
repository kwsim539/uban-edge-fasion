import './product-card.styles.scss';
import Button from '../Button/Button';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    return (
        <div className="product-card-container">

            <div className="footer">
                <div className="name">{name}</div>
                <div className="price">${price}</div>
            </div>
            <div className="media">
                <img src={imageUrl} alt={`${name}`} className=""/>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;