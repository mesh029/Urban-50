import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./leftbar.css";
import { Context } from "../../context/Context";

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
        <Link className="link" to="/">Home</Link>
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
        <Link className="link" to="/write">Basketball</Link>
        </a>
        <a href="/editor">
        <Link className="link" to="/editor">Footbal</Link>
        </a>

      </div>

      </div>

  );
}
