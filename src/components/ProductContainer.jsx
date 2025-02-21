import "../assests/general.css";
import "../assests/Header.css";
import "../assests/products.css";
const ProductContainer = (props) => (
    <div className="product">
        <div className="product-image">
            <img src={props.img} alt="Product Image" />
        </div>
        <div className="product-info">
            <h2>{props.title}</h2>
            <p>
                Vi garanterar att äggen i denna förpackning är av hög kvalitet
                och kommer från frigående höns. Våra höns får röra sig fritt och
                äta en balanserad kost för att säkerställa att äggen de
                producerar är hälsosamma och näringsrika.
            </p>
        </div>
    </div>
);

export default ProductContainer;
