import {Link, Outlet} from "react-router-dom";
import {useContext} from "react";
import CartIcon from "../../Components/CartIcon/CartIcon";
import CartDropdown from "../../Components/CartDropdown/CartDropdown";
import {UserContext} from "../../Context/UserContext";
import {CartContext} from "../../Context/CartContext";
import {ReactComponent as MainLogo} from "../../assets/crown.svg";
import {signOutUser} from "../../utils/firebase/firebase";
import {MainHeader, HeaderContainer, LogoWrapper, MainNav, NavList, NavItem, NavLink} from "./main-wrapper.styles";


const MainWrapper = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    return (
        <>
            <MainHeader>
                <HeaderContainer>
                    <LogoWrapper to="/">
                        <MainLogo className="logo" />
                    </LogoWrapper>
                    <MainNav>
                        <NavList role="menu">
                            <NavItem><Link className="nav-link" to="/shop">Shop</Link></NavItem>
                            {
                                currentUser ? (
                                    <NavItem><NavLink onClick={signOutUser}>Sign
                                        Out</NavLink></NavItem>
                                ) : (
                                    <NavItem><NavLink to="/account">Sign In</NavLink>
                                    </NavItem>
                                )
                            }
                            <li className="nav-item"><CartIcon /></li>
                        </NavList>
                    </MainNav>
                </HeaderContainer>
                {isCartOpen && <CartDropdown/>}
            </MainHeader>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainWrapper;
