import React from 'react'
import { Tab } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Event from "../../components/Event/Event"
import Events from "../../components/events/Events"



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
  const [events, setEvents] = useState([]);
  const { search } = useLocation();
var chess = "chess"
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/?cat2=${"chess"}` + search, cors(corsOptions));
      setPosts(res.data);
    };
    const fetchEvents = async () => {
      const res = await axios.get(`/events/` + search, cors(corsOptions));
      setEvents(res.data);
    };
    fetchEvents();
    fetchPosts();
  }, [search]);

  const chessPosts = (
  
  
    <div className="chessPosts">
      <div className="chessPosts">
      <Postprs postprs={posts}/>
      </div>
    </div>
  )

  const chessEvents = (
    <div className="chessEvents">

      <div className="eventsDescription">
        <h3>Region: Kenya</h3>
        <div className="upcomingEventss">
        <h4>Upcoming events...</h4>
        <Events events={events}/>
        </div>


        <div className="completedEvents">
          <h4>Completed events...</h4>
        </div>

        
      </div>
    </div>
  )


  const topPlayer = (
    <div className="topPlayer">

      <div className="playerDescription">
        <div className="playerProfile">

        </div>


        <div className="description">
        </div>

        
      </div>
    </div>
  )

  
  const panes = [
    { menuItem: 'Posts', render: () => <Tab.Pane>{chessPosts}</Tab.Pane> },
    { menuItem: 'Events', render: () => <Tab.Pane>{chessEvents}</Tab.Pane> },
    { menuItem: 'Top Player', render: () => <Tab.Pane>{topPlayer}</Tab.Pane> },
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

