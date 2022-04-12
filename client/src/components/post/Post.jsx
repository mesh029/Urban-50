import "./post.css";
import { Link } from "react-router-dom";
import md from "../../md";
import TextareaMarkdownEditor from 'react-textarea-markdown-editor';

export default function Post({ post }) {
  const PF = "https://wubbachess.herokuapp.com/images/";

  const postDesc = post.desc
  return (
    <div className="post">
      <div className="posttitle">


      <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
      </div>
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
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

      <div className="postDesc">
        <mark-down>
          {post.desc}
        </mark-down>
      </div>
     
      <span className="postAuthor">
         _ {post.username}
        </span>


    </div>
  );
}
