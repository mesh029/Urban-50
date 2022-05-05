import "./postPro.css";
import { Link } from "react-router-dom";
import md from "../../md";
import TextareaMarkdownEditor from 'react-textarea-markdown-editor';
import { Remarkable }from 'remarkable'
import RemarkablePGN from 'remarkable-pgn'


const remarkable = new Remarkable()


remarkable.use(RemarkablePGN, {/**Options here */})




export default function Postpro({ post }) {
  const PF = "https://wubbachess.herokuapp.com/images/";
  return (
    <div className="postPro">
      <div className="posttitle">
        <h2>Hello world</h2>
      </div>
      {/**
       * 
             {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}

       */}


      <div className="postDesc">
        <mark-down>
          Hello world, I am Meshack, this is my blog page, and this time we have the biggest blog in town, we love to do this sshit today we don't need no one to be shown about everything in this world. Because it is the greatest thing on earth.
        </mark-down>
      </div>

      <div className="postInfo">
        Post info..like dates
      </div>
     
      <span className="postAuthor">
        geekMesh
        </span>


    </div>
  );
}
