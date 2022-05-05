import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/footer"
import Postpro from "../../components/post/Postpro"

import Sidebar from "../../components/sidebar/Sidebar";
import LeftBar from "../../components/leftbar/Leftbar";
import "./land.css";
import axios from "axios";
import { useLocation } from "react-router";

var cors = require('cors')

var text = "#### I am a chess enthusiast who enjoys:\n \n>*Travelling*\n \n>*Basketballn*\n \n *>Poetry*\n \n##### In this blog I seek to bring together the trendiest stuff in regards to what I love, together with some of my friends, to keep you entertained.\n ##### Brace yourself!\n #### This is... \n## Urban 50!"




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
                <h1>About me(shack):)</h1>
                <mark-down>
                  {text}
                </mark-down>
              </div>
            </td>
            <td className="rght2"></td>
          </tr>
        </table>
      </div> 
      <br />
      <br />
      <div className="latestPosts">
      <h1 className="latestTitle">Latest on Urban50</h1>
      <div className="postsAndTab">
      <div className="tab">
        <div className="tabQuote">
          <h2 className="topQuoteTitle">Week's quote</h2>
          <i class="q-icon fa-solid fa-quote-left fa-3x"></i>
          <div className="topQuoteDescDiv">
            <br />
          <h3 className="topQuoteDesc">
          There is no remorse like the remorse of chess.
          </h3>
          <br />
          </div>
          <div className="d">
          <i class="q-icon-d fa-solid fa-quote-right fa-3x"></i>
          <h3>– H. G. Wells</h3>
          </div>
        </div>
      </div>
      <div className="posts">
      <Postpro/>
      <Postpro/>

      </div>
      </div>

      </div>

      <Footer/>
    </>
  );
}
