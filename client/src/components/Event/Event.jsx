import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './event.css'
import { Link } from "react-router-dom";

export default function Event({ event }) {
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

    return (
        // .. return
        <Flippy className="flippyEvents"
            flipOnHover={false} // default false
            flipOnClick={true} // default false
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
                <div className="eventContent">
                    <div className="eventImage">
                        <img className='eventImg' src={event.imgUrl} alt="" />
                    </div>
                    <div className="eventDescUp">
                        <h3 className='eventTtl'>{event.eventName}</h3>

                        <div className="innerDiv">
                            <h5 className=''> {event.eventDesc}</h5>
                        </div>


                        <div className="innerDiv">
                            <h6 className=''> click anywhere on the card for more details</h6>
                        </div>


                    </div>
                </div>

            </FrontSide>
            <BackSide
                style={{}}>

                <div className="eventFlyer">
                    <div className="eventContentBack">
                        <h3 className='eventTtl'>{event.eventName}</h3>
                        <div className="innerDiv">
                            <h5 className=''>Date: <span className='detail'>{event.date}</span> </h5>

                        </div>
                        <div className="innerDiv">
                            <h5 className=''>Venue: <span className='detail'>{event.venue}</span> </h5>
                        </div>

                        <div className="innerDiv">
                            <h5 className=''>Format: <span className='detail'>{event.time}</span> </h5>
                        </div>



                        <div className="innerDiv">
                            <h5 className=''>Categories: <span className='detail'>{event.categories}</span> </h5>
                        </div>

                        <div className="innerDiv">
                            <a href="" className='link'>
                                <h5 className='reg'><a className="link" href={event.registrationLink}>Registration link </a></h5>
                            </a>
                        </div>
                        <br />
                    </div>
                </div>

            </BackSide>
        </Flippy>
    );
}
