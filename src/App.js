import {Routes, Route} from "react-router-dom";
import Home from "./Routes/Home/Home";
import MainWrapper from "./Routes/MainWrapper/MainWrapper";
import Authentication from "./Routes/Authentication/Authentication";

const Shop = () => {
    return (
        <h1>I am the shop page</h1>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainWrapper />}>
                <Route index element={<Home />}/>
                <Route path="shop" element={<Shop />}/>
                <Route path="account" element={<Authentication />}/>
            </Route>

        </Routes>

    );
};

export default App;
