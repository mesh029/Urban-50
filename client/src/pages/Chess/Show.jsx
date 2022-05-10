import React from 'react'
import { Tab } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Event from "../../components/Event/Event"
import Events from "../../components/events/Events"
import md from '../../md'




import './show.css'
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



export default function Show({routeName}) {
  const [posts, setPosts] = useState([]);
  const [events, setEvents] = useState([]);
  const [poetryPosts, setPoetryPosts] = useState([])
 /* const [post, setPost] = useState({});*/

  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/posts/?cat2=${"chess"}` + search, cors(corsOptions));
      setPosts(res.data);
    };
    const fetchPoemPosts = async () => {
      const res = await axios.get(`/posts/?cat2=${"poetry"}` + search, cors(corsOptions));
      setPoetryPosts(res.data);
    };
    const fetchEvents = async () => {
      const res = await axios.get("/events/" + search, cors(corsOptions));
      setEvents(res.data);
    };
    fetchPoemPosts()
    fetchEvents();
    fetchPosts();
  }, [search]);


/**
 * 
 *   const result = md.render(content)

  function createMarkup() {
    return {__html:  `${result}`};
  }
 */

  /**
   * objects
   */
   const chessPosts = (


    <div className="chessPosts">
      <div className="chessPosts">
        <Postprs postprs={posts} />
      </div>
    </div>
  )

  const chessEvents = (
    <div className="chessEvents">

      <div className="eventsDescription">
        <h3><span className='k'>K</span>e<span className='ny'>ny</span>a</h3>
        <div className="upcomingEventss">
          <Events events={events} />
        </div>


        <div className="completedEvents">
        </div>


      </div>
    </div>
  )


  const topPlayer = (
    <div className="topPlayer">

      <div className="player">
        <div className="sidePanel"></div>
        <div className="playerProfile">
          <div className="playerImg">
            <div className="side"></div>
            <div className="centerImg"><img src="https://dunderid.sirv.com/Images/WhatsApp%20Image%202022-04-11%20at%208.32.20%20PM.jpeg" alt="" className='playerPic' /></div>
            <div className="side"></div>
          </div>
          <div className="playerInfo">
            <div className="stats">
              <ul>
                <li><span className='statsSpan'>Name:</span> </li>
                <li><span className='statsSpan'>Nick name:</span></li>
                <li><span className='statsSpan'>Federation:</span></li>
                <li><span className='statsSpan'>Natiionality:</span></li>
                <li><span className='statsSpan'>Fide rating:</span></li>
                <li><span className='statsSpan'>Peak rating:</span></li>
                <li><span className='statsSpan'>Club:</span></li>
              </ul>
            </div>
            <div className="playerStory">{/**dangerouslySetInnerHTML={createMarkup()} */}
              
            </div>
            <div className="feature">
              Contact me to feature as a week's top player &#128293;
            </div>
          </div>
        </div>
        <div className="sidePanel"></div>
      </div>
    </div>
  )


  const poemPosts = (


    <div className="chessPosts">
      <div className="chessPosts">
        <Postprs postprs={poetryPosts} />
      </div>
    </div>
  )

  const poemContests = (
    <div className="chessEvents">

      <div className="eventsDescription">
        <h3><span className='k'>K</span>e<span className='ny'>ny</span>a</h3>
        <div className="upcomingEventss">
          <h4>Working progress...please be patient🥺</h4>
        </div>

        <div className="completedEvents">
        </div>


      </div>
    </div>
  )

  const topPoet =(
    <div className="chessEvents">

    <div className="eventsDescription">
      <div className="upcomingEventss">
        <h4>Working progress...please be patient🥺</h4>
      </div>
      <div className="completedEvents">
      </div>
    </div>
  </div>
  )



  /**objects */
  /**Making everything reusable */
  var firstTabName
  var secondTabName
  var thirdTabName

  var showName

  
  var objectFirstTab
  var objectSecondTab 
  var objectThirdTab



    if (routeName === "poetry") {
      firstTabName = "Posts"
      secondTabName = "Contests"
      thirdTabName = "Top poet"

      objectFirstTab = poemPosts
      objectSecondTab = poemContests
      objectThirdTab = topPoet

      showName = "poetry"

    }else if(routeName === "chess"){
      firstTabName = "Posts"
      secondTabName = "Events"
      thirdTabName = "Top player"

      objectFirstTab = chessPosts
      objectSecondTab = chessEvents
      objectThirdTab = topPlayer

      showName = "chess"

      
    }else if(routeName === "anime"){
      firstTabName = "Posts"
      secondTabName = "Anime fandom"
      thirdTabName = "Top Anime"

      showName = "anime"

    }else if(routeName === "basketball"){
      firstTabName = "Posts"
      secondTabName = "Events"
      thirdTabName = "Top player"

      showName = "basketball"
    }else if(routeName === "travel"){
      firstTabName = "Posts"
      secondTabName = "Road trips"
      thirdTabName = "Top place"
    }else{
      firstTabName = "Posts"
      secondTabName = "Events"
      thirdTabName = "Top player"
    }




  /**
   */

  const panes = [
    { menuItem: `${firstTabName}`, render: () => <Tab.Pane>{objectFirstTab}</Tab.Pane> },
    { menuItem: `${secondTabName}`, render: () => <Tab.Pane>{objectSecondTab}</Tab.Pane> },
    { menuItem: `${thirdTabName}`, render: () => <Tab.Pane>{objectThirdTab}</Tab.Pane> },
  ]


  return (
    <>
      <div className="chessPg">
        <div className="chessPgUp">
          <Section sectionId={showName} />
        </div>
        <div className="chessPgDwn">
          <Tab panes={panes} />
        </div>
      </div>
    </>
  )
}

