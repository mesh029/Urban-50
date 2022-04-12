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
import EdiText from 'react-editext'
import { DraftailEditor, BLOCK_TYPE, INLINE_STYLE } from "draftail"
import e from "cors";


const initial = JSON.parse(sessionStorage.getItem("draftail:content"))





require('medium-editor/dist/css/medium-editor.css')
require('medium-editor/dist/css/themes/default.css')

export default function Write() {
  


  const [text, setText]= useState("hello world, coding is no one's joke")

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  var fieldValue = 'hello'


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
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


  const onSave = (content) => {
    console.log("saving", content)
    sessionStorage.setItem("draftail:content", JSON.stringify(content))
    setDesc(content)
    console.log('description')
    setDesc.bind(content)
    console.log('what the fuck', JSON.stringify(desc))
  }
  const editor = (
    <DraftailEditor
      rawContentState={initial || null}
      onSave={onSave}
      placeholder="Tell your freakin story..."
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_THREE },
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
      ]}
      inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
    />
  )

  //medium insert

//
return(
  
    <div className="write">
      <div className="hello">

      </div>
      <div className="hello">{editor}</div>
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
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          >
          </textarea>

        </div>
        <div className="writeFormGroup">
        <DraftailEditor
      rawContentState={initial || null}
      onSave={console.log('shitty description',desc)}
      placeholder="Tell your freakin story..."
      blockTypes={[
        { type: BLOCK_TYPE.HEADER_THREE },
        { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
      ]}
      inlineStyles={[{ type: INLINE_STYLE.BOLD }, { type: INLINE_STYLE.ITALIC }]}
    />
        </div>
        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );

}
