import './cart-dropdown.styles.scss';
import Button from "../Button/Button";

function CartDropdown(props) {
    return (
        <div className="cart-dropdown-container">
            <ul className="cart-items"></ul>
            <Button>Checkout</Button>
        </div>
    );
}

export default CartDropdown;