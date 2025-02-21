import { Link } from "react-router-dom";
import "../assests/Header.css";
function Header(){
        return(
               <div className="header">
                <div className="logo-div">
                    <img
                        className="logo"
<<<<<<< HEAD
                        src={`${process.env.PUBLIC_URL}/src/pics/logo.png`} 
=======
                        src="./pics/Ellipse_1.png"
>>>>>>> 92dfc07 (fix some the PICS)
                        alt="no image found"
                    />
                </div>

                <div className="header1">
                    <div className="name">
                        <p className="logo-text">
                            <Link to="/React" className="logo-text">
                                Yttertavle Ägg
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="menu">
                    <div className="div_menu">
                        <Link to="/React" className="link">Home</Link>
                    </div>

                    <div className="div_menu">
                        <Link to="/prouducts" className="link">Produkter</Link>
                    </div>
                    <div className="div_menu">
                        <Link to="/facts" className="link">Ägg Recipe</Link>
                    </div>
                   
                </div>
            </div> 
        )
}
export default Header;
