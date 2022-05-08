import React from 'react'
import { Tab } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import './chess.css'
import Posts from '../../components/posts/Posts'
import Propost from '../../components/post/Postpro'
import Postprs from '../../components/Postpros/Postprs'
import Header from '../../components/header/Header'
import Section from '../../components/Sections/Section'


var cors = require('cors')


var corsOptions = {
  origin: 'https://wubbachess.herokuapp.com',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



export default function TabExampleBasic(){
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/" + search, cors(corsOptions));
      setPosts(res.data);
    };
    fetchPosts({category: "chess"});
  }, [search]);

  const chessEvents = (
  
  
    <div className="chessEvents">
      <div className="chessPosts">
      <Postprs postprs={posts}/>
      </div>
    </div>
  )
  
  const panes = [
    { menuItem: 'Posts', render: () => <Tab.Pane>{chessEvents}</Tab.Pane> },
    { menuItem: 'Events', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Top Player', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ]
  

  return(
    <>
      <div className="chessPg">
    <div className="chessPgUp">
      <Section sectionId={'chess'}/>
    </div>
    <div className="chessPgDwn">
      <Tab panes={panes} />
    </div>
    <Link className="link" to="/write"><h1>Write</h1></Link>

    

  </div>
    </>
  )
}

