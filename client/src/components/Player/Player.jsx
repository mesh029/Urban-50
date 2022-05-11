import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './player.css'
import { Link } from "react-router-dom";
import md from '../../md'


export default function Player({ player }) {
    //const PF = "https://wubbachess.herokuapp.com/images/";

    //const cardDesc = card.cardDesc

    //const cat = card.cardCategory
    var category

    var icon
    var link

    if (category === 'chess') {
        icon = <i class="c-icon fa-solid fa-chess-knight fa-3x"></i>
        link = <Link className="link" to="/chess">Chess</Link>



    } else if (category === 'basketball') {
        icon = <i class="c-icon fa-solid fa-basketball fa-3x"></i>
        link = <Link className="link" to="/write">Basketball</Link>


    } else if (category === 'poetry') {
        icon = <i class="c-icon fa-solid fa-feather fa-3x"></i>
        link = <Link className="link" to="/home">Poetry</Link>


    } else if (category === 'travel') {
        icon = <i class="c-icon fa-solid fa-bus fa-3x"></i>
        link = <Link className="link" to="/editor">Chess</Link>

    }


     const result = md.render(player.description)

    function createMarkup() {
      return {__html:  `${result}`};
    }

    return (
        <div className="topPlayer">

        <div className="player">
          <div className="sidePanel"></div>
          <div className="playerProfile">
            <div className="playerImg">
              <div className="side"></div>
              <div className="centerImg"><img src ={player.playerImg} alt="" className='playerPic' /></div>
              <div className="side"></div>
            </div>
            <div className="playerInfo">
              <div className="stats">
                <ul>
                  <li><span className='statsSpan'>Name:</span> <span className='statsInfoSpan'>{player.playerName}</span></li>
                  <li><span className='statsSpan'>Nick name:</span><span className='statsInfoSpan'>{player.nickName}</span></li>
                  <li><span className='statsSpan'>Federation:</span><span className='statsInfoSpan'>{player.federation}</span></li>
                  <li><span className='statsSpan'>Natiionality:</span><span className='statsInfoSpan'>{player.nationality}</span></li>
                  <li><span className='statsSpan'>Fide rating:</span><span className='statsInfoSpan'>{player.fideRating}</span></li>
                  <li><span className='statsSpan'>Peak rating:</span><span className='statsInfoSpan'>{player.peakRating}</span></li>
                  <li><span className='statsSpan'>Club:</span><span className='statsInfoSpan'>{player.club}</span></li>
                </ul>
              </div>
              <div className="playerStory" dangerouslySetInnerHTML={createMarkup()}>{/**dangerouslySetInnerHTML={createMarkup()} */}
                
              </div>
              <div className="feature">
                Contact me to feature as a week's top player &#128293;  
              </div>
            </div>
          </div>
          <div className="sidePanel"></div>
        </div>
      </div>
    );
}
