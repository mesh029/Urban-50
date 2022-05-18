import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./leftbar.css";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";

export default function Sidebar({shot, shotAuthor}) {
  const [cats, setCats] = useState([]);

  // useEffect(() => {
  //  const getCats = async () => {
  //   const res = await axios.get("/categories");
  //    setCats(res.data);
  // };
  // getCats();
  // }, []);
  return (
    <div className="leftb">
      <div className="menu">
        <a >
          <i class="side-Icn fa-solid fa-quote-left fa-3x"></i>
        </a>
        <div className="snap">
          {shot}
        </div>

        <a className="bottomQuote">
          <i class="side-Icn fa-solid fa-quote-right fa-3x"></i>
        </a>

        <div className="bottomSayer">
           ~{shotAuthor}
        </div>



      </div>
    </div>

  );
}
