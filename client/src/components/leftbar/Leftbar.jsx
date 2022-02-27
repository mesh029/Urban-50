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
      <a href="#">Contact</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contacts</a>
    </div>
  );
}
