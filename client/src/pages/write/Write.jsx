import { useContext, useState } from "react";
import ReactDOM from 'react-dom'
import "./write.css";
import MediumEditor, { getContent } from "medium-editor";
import axios from "axios";
import { Context } from "../../context/Context";
import $ from 'jquery'
import Editor from 'react-medium-editor'
import './../../../node_modules/medium-editor/dist/css/medium-editor.css'
import './../../../node_modules/medium-editor/dist/css/themes/default.css'
import 'draft-js/dist/Draft.css'
import 'draftail/dist/draftail.css'


const initial = JSON.parse(sessionStorage.getItem("draftail:content"))





require('medium-editor/dist/css/medium-editor.css')
require('medium-editor/dist/css/themes/default.css')

export default function Write() {
  


  const [text, setText]= useState("hello world, coding is no one's joke")

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [content, setContent] = useState("")
  const [cardTitle, setCardTitle] = useState("not ready")
  const [cardDesc, setCardDesc] = useState("")

  var fieldValue = 'hello'


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      content,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };

  const handleSubmitb = async (e) => {
    e.preventDefault();
    const newCard = {
      cardTitle,
      cardDesc,
    };
    try {
      const res = await axios.post("/cards", newCard);
      window.location.replace("/card/" + res.data._id);

    } catch (err) {

      console.log(err.response.data)
    }

  };

return(
  
    <div className="write">
      <div className="hello">

      </div>
      <div className="editor" >
      </div>
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}

          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          

          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput"
            onChange={e=>setContent(e.target.value)}
          >
          </textarea>

        </div>


        <div className="writeFormGroup">
          

          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          >
          </textarea>

        </div>
        <div className="writeFormGroup">
         </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>

      <div className="editor">
      <form className="writeForm" onSubmit={handleSubmitb}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="CardTitle"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setCardTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Set your card description..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setCardDesc(e.target.value)}
          >
          </textarea>

        </div>
        <button className="writeSubmit" type="submit">
          Submitr
        </button>
      </form>
      </div>
    </div>
  );

}
