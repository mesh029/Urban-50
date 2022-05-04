import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/footer"

import Sidebar from "../../components/sidebar/Sidebar";
import LeftBar from "../../components/leftbar/Leftbar";
import "./land.css";
import axios from "axios";
import { useLocation } from "react-router";

var cors = require('cors')

var text = "# About me \n I am a chess enthusiasts who enjoys:\n * Travelling\n * Basketball\n * Poetry\n \n In this blog I seek to bring together the trendiest stuff in regards to what I love, together with some of my friends to keep you entertained.\n  brace yourself!\n \n This is \n## Urban 50!"




var corsOptions = {
  origin: 'ttps://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200
}
export default function Home() {

  const [cards, setCards] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchCards = async () => {
      const res = await axios.get("/cards/" + search, cors(corsOptions));
      setCards(res.data);
    };
    fetchCards();
  }, [search]);
  return (
    <>
        <Header className="header"/>     
      <div class="land-sec">
        <table className="land_tbl">
          <tr className="land_rw">
            <td className="lft"></td>
            <td className="cntr">
            <Cards cards={cards} />
            </td>
            <td className="rght"></td>
          </tr>
          <tr className="land_rw2">
            <td className="lft2"></td>
            <td className="cntr2">
              <div className="info">
                <mark-down>
                  {text}
                </mark-down>
              </div>
            </td>
            <td className="rght2"></td>
          </tr>
        </table>
      </div> 
      <Footer/>
    </>
  );
}
