import './loadingSkeletonPost.css'
import Skele, { SkeletonTheme } from 'react-loading-skeleton'

export default function Skeleton() {
 

  return (
<div className="postProSkele">
      <div className="posttitle">
          <h4 className="link postTtl"><Skele width={'55%'} height={20}/></h4>
      </div>
      {/**
       * 
             {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}

       */}


      <div className="postDescSkele">
      <p>  <Skele width={'100%'} height={6}/>
      <Skele width={'100%'} height={6}/>
      <Skele width={'40%'} height={6}/>
      
      </p>
      </div>

      <div className="postInfo">

      </div>

      <span className="postAuthor">
      <Skele width={50} height={10}/>
      </span>


    </div>

  );
}
