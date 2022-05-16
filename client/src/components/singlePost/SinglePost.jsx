import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import markdownIt from 'markdown-it'
import md from '../../md'



export default function SinglePost() {

  
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://wubbachess.herokuapp.com/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [content, setContent]  = useState("")
  const [sanitizedHTML, setSanitizedHtml] = useState("")


  var MarkdownIt = require('markdown-it')









  var cors = require('cors')


  var corsOptions = {
    origin: 'ttps://wubbachess.herokuapp.com',
    optionsSuccessStatus: 200
  }

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path, cors(corsOptions));
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setContent(res.data.content)
      setSanitizedHtml(res.data.sanitizedHTML)
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        content,
      });
      setUpdateMode(false)
    } catch (err) {}


    
  };

  //var sanitized



  //const result = md.render(content)
  /*const createDomPurify = require('dompurify')
  const {JSDOM} = require('jsdom')
  const domPurify = createDomPurify(new JSDOM().window)

  if(result){
   const sanitizedResult = domPurify.sanitize(result, {ALLOWED_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'className']})
   sanitized = sanitizedResult
  }else{
    console.log("Object is falsy!")
  }
*/




  function createMarkup() {
    return {__html:  `${sanitizedHTML}`};
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {/**
         * Anncient stuff I plan to bring back to life sometime soon
         *         {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
          
        )}
         */}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
          rows={30}
            className="singlePostDescInput"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        ) : (
          <div className="singlePostDesc">

            <div className="singlePostDesc" dangerouslySetInnerHTML={createMarkup()}>    
            </div>
    
            </div>
        )}
        {updateMode && (
          <>
            <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>    

          
          </>
        


          
        )}
      </div>
    </div>
  );
}
