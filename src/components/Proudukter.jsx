import { Link } from "react-router-dom";
import "../assests/general.css";
import "../assests/Header.css";
import "../assests/products.css";
import ProductContainer from "./ProductContainer";
const Produkter = () => (
    <div className="body">
        <div className="container">
            <ProductContainer
                title="21 Ägg Pack"
                img="../pics/Ytter_20_plast-removebg-preview.png"
            />
            <ProductContainer
                title="18 Ägg Pack"
                img="../pics/Yttertavle_18.png"
            />
            <ProductContainer
                title="15 Ägg Pack"
                img="/pics/Yttertavle_15.png"
            />
        </div>
        <div className="container">
            <ProductContainer
                title="12 Ägg Pack"
                img="React/pics/Yttertavle_12.png"
            />
            <ProductContainer
                title="10 Ägg Pack"
                img="../pics/Yttertavle_10.png"
            />
            <ProductContainer
                title="6 Ägg Pack"
                img="../pics/Yttertavle_6.png"
            />
        </div>
    </div>
);

export default Produkter;
