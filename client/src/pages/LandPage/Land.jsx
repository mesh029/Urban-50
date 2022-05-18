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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonProduct from "../../components/loadingSkeleton/LoadingSkeleton"
import SkeletonProductPost from "../../components/loadingSkeleton/LoadingSkeletonPost"
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

  /**Implementation of loading screen */
  const [loader, setLoader] = useState(false)
  /**Implementation of loading screen */

  useEffect(() => {
    setLoader(true)
    setTimeout(async () => {
      setLoader(false)
      const fetchCards = async () => {
        const res = await axios.get("/cards/" + search, cors(corsOptions));
        setCards(res.data);
      };
      const fetchPosts = async () => {
        const res = await axios.get(`/posts/?page=${"land"}` + search, cors(corsOptions));
        setPosts(res.data);
      };
      fetchPosts({ category: "chess" });
      fetchCards();
    }, 900)

  }, [search]);
  return (
    <>
      <section>
        <Header className="header" />
      </section>
      <div class="land-sec">
        <table className="land_tbl">
          <tr className="land_rw">
            <td className="cntr">
              {!loader ? ((cards.length >= 1 ) ?(
                <Cards cards={cards} />

              ) : (
                <div className="skeletons">
                  {
                    [1, 2, 3, 4, 5].map(loading => (
                      <SkeletonProduct />

                    ))
                  }

                </div>

                )):(
                  <div className="skeletons">
                  {
                    [1, 2, 3, 4, 5].map(loading => (
                      <SkeletonProduct />
                    ))
                  }

                </div>
                )
              }
            </td>
          </tr>
        </table>
      </div>
      
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
          {!loader ? ( (posts.length>=1)?(
            <Postprs postprs={posts} />

              ) : (
                <div className="skeletonsPosts">
                  {
                    [1, 2, 3].map(loading => (
                      <SkeletonProductPost />

                    ))
                  }


                </div>

              )):(
                <div className="skeletonsPosts">
                {
                  [1, 2, 3].map(loading => (
                    <SkeletonProductPost />

                  ))
                }
                </div>
              
              )
              }
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
