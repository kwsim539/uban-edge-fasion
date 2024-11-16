import {useContext} from "react";
import {Link, Outlet} from "react-router-dom";
import {ReactComponent as MainLogo} from "../../assets/crown.svg";
import {UserContext} from "../../Context/UserContext";
import {signOutUser} from "../../utils/firebase/firebase";
import "./main-wrapper.styles.scss";

const MainWrapper = () => {
    const {currentUser} = useContext(UserContext);

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
                                    <li className="nav-item"><Link className="nav-link" onClick={signOutUser}>Sign Out</Link></li>
                                ) : (
                                    <li className="nav-item"><Link className="nav-link" to="/account">Sign In</Link></li>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default MainWrapper;
