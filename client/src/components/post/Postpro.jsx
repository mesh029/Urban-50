import "./postPro.css";
import { Link } from "react-router-dom";
import md from "../../md";
import TextareaMarkdownEditor from 'react-textarea-markdown-editor';
import { Remarkable } from 'remarkable'
import RemarkablePGN from 'remarkable-pgn'


const remarkable = new Remarkable()


remarkable.use(RemarkablePGN, {/**Options here */ })




export default function Postpro({ post }) {
  const PF = "https://wubbachess.herokuapp.com/images/";
  return (
    <div className="postPro">
      <div className="posttitle">
        <Link to={`/post/${post.slug}`} className="link">
          <h4 className="link postTtl">{post.title}</h4>
        </Link>
      </div>
      {/**
       * 
             {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}

       */}


      <div className="postDesc">
        <Link to={`/post/${post._id}`} className="link">
          <mark-down>
            {post.desc}
          </mark-down>

        </Link>

      </div>

      <div className="postInfo">
        {new Date(post.createdAt).toDateString()}

      </div>

      <span className="postAuthor">
        {post.username}
      </span>


    </div>
  );
}
