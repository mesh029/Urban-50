import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./footer.css";

export default function Footer() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://wubbachess.herokuapp.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="footer-b">
    <div className="footer-div leftmost">
    <table className="tblFoot">
      <tr className="tTop"></tr>
      <tr className="tCenter">
      <a href="" className="footerList leftmosta">
      <h1>Urban50</h1>
      </a>
      </tr>
      <tr className="tBottom">
      <h5 className="footerList leftmosta copy">&copy; 2022 Urban50, inc</h5>

      </tr>
    </table>
     </div>
      <div className="footer-div">
      <table className="tblFoot">
      <tr className="tTop"></tr>
      <tr className="tCenter2">
      <a href="" className="footerList leftmosa">
      <h3>Social handles</h3>
      <ul className="footerList">
        <li><a href="" className="footerList">Twitter</a></li>
        <li><a href="" className="footerList">Facebook</a></li>
        <li><a href="" className="footerList">Instagram</a></li>

      </ul>

      <h3>Contact me</h3>
      <ul className="footerList">
        <li><a href="" className="footerList">Twitter</a></li>
        <li><a href="" className="footerList">Facebook</a></li>
        <li><a href="" className="footerList">Instagram</a></li>
      </ul>

      </a>
      </tr>
      <tr className="tBottom"></tr>
    </table>
      </div>

      <div className="footer-div ">
      <table className="tblFoot">
      <tr className="tTop"></tr>
      <tr className="tCenterl">
      <a href="" className="footerList leftmosa">
      <h3>Urban50 cool stat</h3>
      </a>
      <p>All rights reserverd, this is a funBoy blog. I enjoy writing about stuff I find cool. Enjoy!</p>
      </tr>
      <tr className="tBottom"></tr>
    </table>
      </div>

    </div>
  );
}
