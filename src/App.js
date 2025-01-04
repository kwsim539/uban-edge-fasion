import {Routes, Route} from "react-router-dom";
import Home from "./Routes/Home/Home";
import MainWrapper from "./Routes/MainWrapper/MainWrapper";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/Shop/Shop";
import Checkout from "./Routes/Checkout/Checkout";


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainWrapper />}>
                <Route index element={<Home />}/>
                <Route path="shop/*" element={<Shop />}/>
                <Route path="account" element={<Authentication />}/>
                <Route path="checkout" element={<Checkout />}/>
            </Route>

        </Routes>

    );
};

export default App;
