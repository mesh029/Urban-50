import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/footer"
import Postpro from "../../components/post/Postpro"
import NavBar from "../../components/topbar/NavBar"
import Postprs from "../../components/Postpros/Postprs"

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

  const [posts, setPosts] = useState([]);

  const [cards, setCards] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchCards = async () => {
      const res = await axios.get("/cards/" + search, cors(corsOptions));
      setCards(res.data);
    };
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/?page=${"land"}` + search, cors(corsOptions));
      setPosts(res.data);
    };
    fetchPosts({category: "chess"});
    fetchCards();
  }, [search]);
  return (
    <>
      <Header className="header" />
      <div class="land-sec">
        <table className="land_tbl">
          <tr className="land_rw">
            <td className="cntr">
              <Cards cards={cards} />
            </td>
          </tr>
        </table>
      </div>
      <div className="info">
        <h2>About me(shack):)</h2>
        <br />
        <h4>I am a chess enthusiast who enjoys:</h4>
        <ul>
          <li>Chess</li>
          <li>Basketballn</li>
          <li>Travelling</li>
          <li>Poetry</li>
        </ul>
        <h4> In this blog I seek to bring together the trendiest stuff in regards to what I love, together with some of my friends, to keep you entertained.</h4>
        <h4>Brace yourself! This is...</h4>
        <h3>Urban 50!</h3>
      </div>
      <br />
      <div className="latestPosts">
        <h2 className="latestTitle">Latest on Urban50</h2>
        <div className="postsAndTab">
          <div className="tab">
            <div className="tabQuote">
              <h2 className="topQuoteTitle">Top quote</h2>
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
          <Postprs postprs={posts}/>


          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
