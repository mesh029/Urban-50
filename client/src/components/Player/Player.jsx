import './player.css'
import { Link } from "react-router-dom";
import md from '../../md'


export default function Player({ player }) {



    const result = md.render(player.description)

    function createMarkup() {
        return { __html: `${result}` };
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
                                <li><span className='statsSpan'>Natiionality:</span><span className='statsInfoSpan'>{player.nationality}</span></li>
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
