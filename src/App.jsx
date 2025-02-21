import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Produkter from "./components/Proudukter";
import Facts from "./components/Facts";
function App() {
    return (    <>

        <Header />
        <Routes>
        <Route path="/HOME" element={<Home />} />
        <Route path="/prouducts" element={<Produkter />} />
        <Route path="/facts" element = {<Facts/>}/>
        
      </Routes>
        <Footer />
        </>
    );
}

export default App;
