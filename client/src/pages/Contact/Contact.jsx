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
import "./contact.css";
import axios from "axios";
import { useLocation } from "react-router";



var corsOptions = {
  origin: 'ttps://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200
}
export default function Home() {

  return (
    <>
      <Header className="header" />
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
      <br />
        <h2>How to contact me(shack):)</h2>
        <br />
        <h4>You can reach me on various platforms:</h4>
        <ul>
          <li>Whats app +254741174779</li>
          <li>Instagram @geekMesh</li>
          <li>Twitter @geekMesh</li>
        </ul>
        <h4>
             Why should you contact me? I write code for fun, I don't mind contracts though. You can also check out my projects on github. I am a fun boy who is an enthusiast of many things; a professional chess player who also teaches others how to play(ages 9+). I write poems and recomend good animes &#128514;(for free of course). I can also teach how to code in a variety of programming languages.
             </h4>
        <h4>Im always available so I promise to get back to you soonest.</h4>
      </div>
    

      <Footer />
    </>
  );
}
