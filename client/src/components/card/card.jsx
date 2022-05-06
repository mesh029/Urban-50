import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './card.css'
import { Link } from "react-router-dom";

export default function Card({ card }) {
  //const PF = "https://wubbachess.herokuapp.com/images/";

  //const cardDesc = card.cardDesc

  //const cat = card.cardCategory
  var category = card.cardCat

  var icon
  var link

  if (category === 'chess') {
    icon = <i class="c-icon fa-solid fa-chess-knight fa-3x"></i>
    link = <Link className="link" to="/editor">Chess</Link>



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
              <div className="cardIcn">{icon}</div>
              <div className="cardTitleDiv">
                <Link to={`/card/${card._id}`} className="link">
                  <h1><span className="cardTitle">{card.cardTitle}</span></h1>
                </Link>
              </div>
            </div>
            <div className="cardDesc">
            {card.cardDesc}
            </div>
            <div className="cardDe">
              {link}
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
