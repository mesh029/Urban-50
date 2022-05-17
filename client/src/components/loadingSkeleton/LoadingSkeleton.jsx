import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './loadingSkeleton.css'
import Skele, { SkeletonTheme } from 'react-loading-skeleton'

export default function Skeleton() {
 

  return (
    // .. return
    // .. return
    <Flippy className="flippySkele"
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
              <div className="cardIcn">
                  <Skele width={30} height={30} circle={true}/>
              </div>
              <div className="cardTitleDiv">
              <Skele width={'85%'} height={30}/>

              </div>
            </div>
            <div className="cardDescSkele">
            <h3>  <Skele width={'100%'} height={20}/></h3>
            <h3>  <Skele width={'100%'} height={20}/></h3>
            <h3>  <Skele width={'40%'} height={20}/></h3>


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
