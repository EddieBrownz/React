import { Link } from "react-router-dom";
import "../assests/Header.css";
function Footer(){
        return(
                <div className="footer">
                <div className="footer-1">
                <div className="footer-info">
                    <p className="footer-text">
                        Adress: Yttertavle 341, 905 96 Umeå
                    </p>
                    <p className="footer-text">
                        <a href="tel:+4609029123" className="phone">+4609029123</a>
                    </p>
                    <p className="footer-text">
                        <a
                            href="mailto:info@yttertavleagg.com?subject=Subject%20Line&body=Body%20Text"
                            className="mail"
                        >
                            info@yttertavleagg.com
                        </a>
                    </p>
                </div>
            </div>
            </div>
        )
}
export default Footer;
