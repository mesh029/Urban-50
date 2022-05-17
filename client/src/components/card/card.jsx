import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './card.css'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


export default function Card({ card }) {
  //const PF = "https://wubbachess.herokuapp.com/images/";

  //const cardDesc = card.cardDesc

  //const cat = card.cardCategory
  var category = card.cardCat

  var icon
  var link

  if (category === 'chess') {
    icon = <i class="c-iconLand fa-solid fa-chess-knight fa-3x"></i>
    link = <Link className="link" to="/show/chess">Chess</Link>



  } else if (category === 'basketball') {
    icon = <i class="c-iconLand fa-solid fa-basketball fa-3x"></i>
    link = <Link className="link" to="/show/basketball">Basketball</Link>


  } else if (category === 'poetry') {
    icon = <i class="c-iconLand fa-solid fa-feather fa-3x"></i>
    link = <Link className="link" to="/show/poetry">Poetry</Link>


  } else if (category === 'travel') {
    icon = <i class="c-iconLand fa-solid fa-bus fa-3x"></i>
    link = <Link className="link" to="/show/travel">Travelling</Link>

  }
  else if (category === 'anime') {
    icon = <i class="c-iconLand fa-solid fa-dragon fa-3x"></i>
    link = <Link className="link" to="/show/anime">Anime</Link>

  }

  return (
    // .. return
    <Flippy className="flippy"
      flipOnHover={false} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
    //ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
    // if you pass isFlipped prop component will be controlled component.
    // and other props, which will go to div
    // style={{ width: '300px', height: '300px', margin: '20px' }} /// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          /* fallback for old browsers */
          /*background: '#0090b1'*/

        }}
        className="frontside"
      >
        <div className="card">
          <div className="cardContent">
            <div className="cardIcnTitle">
              <div className="cardIcnLand">{icon}</div>
              <div className="cardTitleDiv">
              <NavLink className="link" activeStyle={{ fontWeight: 600, fontSize: '20px' }} to={`show/${category}`}>
                  <h1><span className="cardTitle">{card.cardTitle}</span></h1>
                </NavLink>
              </div>
            </div>
            <div className="cardDesc">
            {card.cardDesc}
            </div>
          </div>
        </div>

      </FrontSide>
      <BackSide
        style={{}}>

      </BackSide>
    </Flippy>
  );
}
