import {Link, Outlet} from "react-router-dom";
import {useContext} from "react";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";
import {UserContext} from "../../Context/UserContext";
import {CartContext} from "../../Context/CartContext";
import {ReactComponent as MainLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase";
import "./main-wrapper.styles.scss";


const MainWrapper = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <>
            <header>
                <div className="header-container">
                    <Link to="/" className="logo-wrapper">
                        <MainLogo className="logo" />
                    </Link>
                    <nav className="main-nav">
                        <ul className="nav" role="menu">
                            <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
                            {
                                currentUser ? (
                                    <li className="nav-item"><Link className="nav-link" onClick={signOutUser}>Sign
                                        Out</Link></li>
                                ) : (
                                    <li className="nav-item"><Link className="nav-link" to="/account">Sign In</Link>
                                    </li>
                                )
                            }
                            <li className="nav-item"><CartIcon /></li>
                        </ul>
                    </nav>
                </div>
                {isCartOpen && <CartDropdown/>}
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainWrapper;
