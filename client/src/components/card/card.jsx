import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './card.css'
import { Link } from "react-router-dom";

export default function Card({ card }) {
    //const PF = "https://wubbachess.herokuapp.com/images/";
  
    //const cardDesc = card.cardDesc

    //const cat = card.cardCategory
    var category = card.cardCat

    var icon

    if (category === 'chess') {
      icon =         <i class="fa-solid fa-chess-knight fa-10x"></i>

    }else if(category === 'basketball'){
      icon =      <i class="fa-solid fa-basketball fa-10x"></i>

    }else if(category === 'poetry'){
      icon =     <i class="fa-solid fa-feather fa-10x"></i>

    }else if(category === 'travel'){
      icon = <i class="fa-solid fa-bus fa-10x"></i>
    }

    return (
     	// .. return
  <Flippy className="flippy"
  flipOnHover={true} // default false
  flipOnClick={true} // default false
  flipDirection="horizontal" // horizontal or vertical
  //ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
  // if you pass isFlipped prop component will be controlled component.
  // and other props, which will go to div
 // style={{ width: '300px', height: '300px', margin: '20px' }} /// these are optional style, it is not necessary
>
  <FrontSide
    style={{
      backgroundColor: '#42a5f5',
      
    }}
  >
    <div className="card">
      <div className="cardIcn">
        {icon}
      </div>


      <div className="cardTitle">
        <Link to={`/card/${card._id}`} className="link">
          <h1><span className="cardTitle">{card.cardTitle}</span></h1>
        </Link>

      </div>

    </div>

  </FrontSide>
  <BackSide
    style={{}}>

      <div className="cardDesc">
        {card.cardDesc}
      </div>
  </BackSide>
</Flippy>
    );
  }
  