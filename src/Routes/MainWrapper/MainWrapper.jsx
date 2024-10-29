import {Link, Outlet} from "react-router-dom";
import {ReactComponent as MainLogo} from "../../assets/crown.svg";
import "./main-wrapper.styles.scss";

const MainWrapper = () => {
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
                            <li className="nav-item"><Link className="nav-link" to="/account">Account</Link></li>
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
