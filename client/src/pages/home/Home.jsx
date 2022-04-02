import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import LeftBar from "../../components/leftbar/Leftbar";
import TopBar from "../../components/topbar/TopBar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
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
