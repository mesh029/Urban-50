import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
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
      <li className="topListItem">
            <Link className="link" to="/">
              Urban50
            </Link>
          </li>
     </div>
      <div className="topCenter">
        <ul className="topList"> 
        <h5>menu</h5>
     
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
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
