import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

var cors = require('cors')


var corsOptions={
  origin: 'https://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200,

}
export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories", cors(corsOptions));
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar right">
      <div className="sidebarItem">
        <span className="sidebarTitle">Trends</span>
        <ol className="sidebarList">
          <li className="sidebarListIte">#meshackWinsTata </li>
          <li className="sidebarListIte">#zadockTheChessChamp </li>
          <li className="sidebarListIte">#maganaIsBack </li>
         

        </ol>
       
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Events</span>
        <div className="same">
          <div className="views">
            <h4>Completed</h4>
          </div>

          Name: Grand prix Arena
          Date:
          Participants:
        </div>

        <div className="same">
          <div className="views">
            <h4>Upcoming</h4>
          </div>

          Name: Capablanca tournament
          Date: 
          Participants:
        </div>

     
     
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Events</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
