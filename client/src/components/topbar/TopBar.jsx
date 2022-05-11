import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";

import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://wubbachess.herokuapp.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <Link className="link" to="/">
          <h3 className="webTitle">Urban50</h3>
        </Link>

      </div>
      <div className="topCenter">
        <div className="centerDivTop">
          <nav role="navigation" className="navigation">
            <ul>
              <li>
                <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '20px' }} to="/land">
                  <a href="#" className="link"><i class="fa-solid fa-house"></i></a>
                </NavLink>
              </li>
              <li>
                <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '20px' }} to="/contact">
                <a href="#" className="link"><i class="fa-solid fa-phone-flip"></i></a>
                </NavLink>

              </li>

              <li>
                <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '20px' }} to="/">
                  <a href="#" className="link"><i class="fa-solid fa-building"></i></a>
                </NavLink>

                <ul class="dropdown">
                  <li><a href="#">Sub-1</a></li>
                  <li><a href="#">Sub-2</a></li>
                  <li><a href="#">Sub-3</a></li>
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
      <div className="topRight">
        <a className="linktopListItem link" onClick={handleLogout}>
          {user && "logout"}
        </a>
        {user ? (
          <Link to="/settings">
            {/*<img className="topImg" src={PF+user.profilePic} alt="" />*/}
            <div className="topImg">
              <i class="profImg fa-solid fa-user-large fa-2x"></i>
            </div>
          </Link>
        ) : (
          <ul className="topList ls">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login/Register
              </Link>
            </li>
            <li className="topListItem ls">
              <Link className="link" to="/register">

              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
