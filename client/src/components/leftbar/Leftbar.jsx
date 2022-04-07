import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./leftbar.css";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

 // useEffect(() => {
  //  const getCats = async () => {
   //   const res = await axios.get("/categories");
  //    setCats(res.data);
   // };
   // getCats();
 // }, []);
  return (
    <div className="left">
      <div className="menu">
        <a href="#">
        <NavLink className="link" className={isActive =>
    "nav-link" + (!isActive ? " sekected" : "")} activeStyle={{color: 'red'}}  to="/home">Home</NavLink>
        </a>
        <a href="#">
        <Link className="link" to="/write">Write</Link>
        </a>
      </div>

      <div className="blogCategory">

      <a href="#">
        <Link className="link" to="/">Chess</Link>
        </a>
        <a href="#">
        <NavLink className="link" activeStyle={{color:'red'}} to="/land">Basketball</NavLink>
        </a>
        <a href="/editor">
        <Link className="link" to="/editor">Footbal</Link>
        </a>

      </div>

      </div>

  );
}
