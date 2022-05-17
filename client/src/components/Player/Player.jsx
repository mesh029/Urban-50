import './player.css'
import { Link } from "react-router-dom";
import md from '../../md'
import dompurify from 'dompurify'
import marked from 'marked'



export default function Player({ player }) {

    //const createDomPurify = require('dompurify')
   // const {JSDOM} = require('jsdom')
    //const domPurify = createDomPurify(new JSDOM().window)
    const description = player.description
   // var sanitized
  
    const result = md.render(description)

    const sanitizedResult = dompurify.sanitize(result, {ALLOWED_TAGS: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "i", , "p", "em", "b", "blockquote", "strong", "a" ,"li"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'className']})


   /**  if(result){
        const sanitizedResult =  domPurify.sanitize(marked(description))
        sanitized = sanitizedResult

    }else{
        console.log("object is falsy")
    }

    
  */


    function createMarkup() {
        return { __html: `${sanitizedResult}` };
    }

    return (
        <div className="topPlayer">

            <div className="player">
                <div className="sidePanel"></div>
                <div className="playerProfile">
                    <h3 className='playerProfileTitle'><span className='pPT'>Week's player</span> </h3>
                    <div className="playerImg">
                        <div className="side"></div>
                        <div className="centerImg"><img src={player.playerImg} alt="" className='playerPic' /></div>
                        <div className="side"></div>
                    </div>
                    <div className="playerInfo">
                        <div className="stats">
                            <ul>
                                <li><span className='statsSpan'>Name:</span> <span className='statsInfoSpan'>{player.playerName}</span></li>
                                <li><span className='statsSpan'>Nick name:</span><span className='statsInfoSpan'>{player.nickName}</span></li>

                                <li><span className='statsSpan'>Federation:</span><span className='statsInfoSpan'>{player.federation}</span></li>
                                <li><span className='statsSpan'>Nationality:</span><span className='statsInfoSpan'>{player.nationality}</span></li>
                                <li><span className='statsSpan'>Fide rating:</span><span className='statsInfoSpan'>{player.fideRating}</span></li>
                                <li><span className='statsSpan'>Peak rating:</span><span className='statsInfoSpan'>{player.peakRating}</span></li>
                                <li><span className='statsSpan'>Club:</span><span className='statsInfoSpan'>{player.club}</span></li>
                            </ul>
                        </div>
                        <div className="playerStory" dangerouslySetInnerHTML={createMarkup()}>{/**dangerouslySetInnerHTML={createMarkup()} */}

                        </div>
                        <hr />
                        <div className="feature">
                            <i>                Contact me to feature as a week's player &#128293;
                            </i>
                        </div>
                    </div>
                </div>
                <div className="sidePanel"></div>
            </div>
        </div>
    );
}




