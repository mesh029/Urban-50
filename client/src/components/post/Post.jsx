import "./post.css";
import { Link } from "react-router-dom";
import md from "../../md";
import TextareaMarkdownEditor from 'react-textarea-markdown-editor';
import { Remarkable } from 'remarkable'
import RemarkablePGN from 'remarkable-pgn'


const remarkable = new Remarkable()


remarkable.use(RemarkablePGN, {/**Options here */ })




export default function Post({ post }) {
  const PF = "https://wubbachess.herokuapp.com/images/";
  return (
    <div className="post">
      <div className="posttitle">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle link" >{post.title}</span>
        </Link>
      </div>
      {/**
       * 
             {post.photo && <img className="postImg" src={PF + post.photo} alt=""/>}

       */}


      <div className="postDesc">
        <mark-down>
          {post.desc}
        </mark-down>
      </div>

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <span className="postAuthor">
        _ {post.username}
      </span>

      <Link className="link" to="/land">Land</Link>



    </div>
  );
}
