import { useEffect, useState } from "react";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import LeftBar from "../../components/leftbar/Leftbar";
import TopBar from "../../components/topbar/TopBar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Header from "../../components/header/Header"

var cors = require('cors')


var corsOptions = {
  origin: 'https://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/" + search, cors(corsOptions));
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
        <LeftBar/>
      <div class="home">
        <Posts posts={posts} />
        <Sidebar/>
      </div> 
    </>
  );
}
