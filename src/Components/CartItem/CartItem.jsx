import './cart-item.styles.scss';


const CartItem = ({cartItem}) => {
    const {name, price, quantity, imageUrl} = cartItem;
    return (
        <>
            <li className="cart-item-container">
                <img src={imageUrl} alt={`${name}`} className=""/>
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">{quantity} x ${price}</span>
                </div>
            </li>

        </>
    );
};

export default CartItem;