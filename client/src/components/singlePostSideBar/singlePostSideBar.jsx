import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./singlePostSidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar right">
      <div className="about ">
        <div>
        <h1>About author</h1>
        </div>
        <div>This guy is a seriously dope g</div>
        
        </div>
      <div className="same sideItem">
        <div className="views">
          <h1>same author</h1>
        </div>
      </div>
      <div className="similar"><h1>Similar</h1></div>

    </div>
  );
}
