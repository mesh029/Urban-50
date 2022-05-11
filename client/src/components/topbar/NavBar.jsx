import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./navbar.css";
import { NavLink } from "react-router-dom";


export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "https://wubbachess.herokuapp.com/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="navDiv">
            <div className="centerDiv">
                <nav role="navigation" className="navigation">
                    <ul className="ulItem">
                        <li className="listItem">
                            <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '20px' }} to="/land">
                                <a href="#" className="link"><i class="fa-solid fa-house"></i></a>
                            </NavLink>
                        </li>
                        <li className="listItem">
                            <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '10px' }} to="/contact">
                            <a href="#" className="link"><i class="fa-solid fa-phone-flip"></i></a>
                            </NavLink>
                        </li>
                        <li className="listItem">
                            <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '20px' }} to="/">
                                <a href="#" className="link"><i class="fa-solid fa-building"></i></a>
                            </NavLink>
                            <ul class="dropdown" aria-label="submenu">
                                <li className="listItem"><a href="#" className="anchorItem">Sub-1</a></li>
                                <li className="listItem"><a href="#" className="anchorItem">Sub-2</a></li>
                                <li className="listItem"><a href="#" className="anchorItem">Sub-3</a></li>
                            </ul>
                        </li>
                        <li className="listItem">
                            <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '20px' }} to="/write">
                                <a href="#" className="link"> <i class="fa-solid fa-pen"></i></a>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}
