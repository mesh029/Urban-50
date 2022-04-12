import { useContext, useState, useRef } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import $ from 'jquery'



import { Icon } from 'semantic-ui-react';
import getConfig from './../../CustomizedMarkdownEditor/config';
import md from './../../md';
import { useDropzone } from 'react-dropzone';
import TextareaMarkdownEditor from 'react-textarea-markdown-editor';

const value = `
# react-textarea-markdown-editor
A highly **customizable**, **light weight** *React* markdown editor which is
* Based on pure textarea
* Not bundled with any markdown parser. Free free to use [markdown-it](https://www.npmjs.com/package/markdown-it), [marked](https://www.npmjs.com/package/marked) or other markdown parsers.
* Support dropping and pasting image by customization (Please check the example)
* Customizable menu bar
`;

const languageOptions = [
  { key: 'Chinese', text: '简体中文', value: 'zh' },
  { key: 'English', text: 'English', value: 'en' },
];



export default function Write(props) {
  

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);



 
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

  /**customized editor */

  const { language = 'en' } = props;

  const [images, setImages] = useState([]);
  const { getRootProps, getInputProps, open, isDragActive } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/jpeg, image/png',
    onDropAccepted: async (files) => {
      const data = await FileReader.readAsDataURL(files[0]);
      editorRef.current.mark('![', `][image${images.length + 1}]`, 'alt text');
      setImages([...images, data]);
    },
  });
  const editorRef = useRef(null);

  const markers = [
    ...getConfig(language),
    {
      key: 'images',
      markers: [
        {
          key: 'images',
          markers: [
            {
              key: 'open',
              name: <Icon name="image" fitted size="large" onClick={open}/>,
              title: 'Open file',
              type: 'component',
            },
            ...images.map((data, index) => ({
              defaultText: 'alt text',
              key: `image${index + 1}`,
              name: `image${index + 1}`,
              prefix: '![',
              suffix: `][image${index + 1}]`,
              title: `image${index + 1}`,
              type: 'marker',
            })),
          ],
          type: 'dropdown',
        },
      ],
    },
  ];

  async function onPaste (e) {
    if (!e.clipboardData) {
      return;
    }
    const items = e.clipboardData.items;
    if (!items) {
      return;
    }
    for (let i = 0; i < items.length; i++) {
      // Skip content if not image
      if (items[i].type.indexOf('image') === -1) continue;
      // Retrieve image on clipboard as blob
      const file = items[i].getAsFile();
      console.log(items[i]);
      if (file) {
        e.preventDefault();
        e.stopPropagation();
        // File name
        console.log(e.clipboardData.getData('Text'));
        const data = await FileReader.readAsDataURL(file);
        console.log(data);
        editorRef.current.mark('![', `][image${images.length + 1}]`, 'alt text');
        setImages([...images, data]);
      }
    }
  }
  /**Customized editor */


  const onSave = (content) => {
    console.log("saving", content)
    sessionStorage.setItem("draftail:content", JSON.stringify(content))
    setDesc(content)
    console.log('description')
    setDesc.bind(content)
    console.log('what the fuck', JSON.stringify(desc))
  }


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
      <div {...getRootProps({ className: 'dropzone' })} className={isDragActive ? 'dropping' : ''}>
        <input {...getInputProps()} />
        <TextareaMarkdownEditor ref={editorRef} markers={markers} language={language} rows={10}
                              placeholder="Tell your story..."
                              doParse={text => md.render(`${text}\n\n${images.map((data, index) => `[image${index + 1}]: ${data}`).join('\n\n')}`, setDesc(`${text}\n\n${images.map((data, index) => `[image${index + 1}]: ${data}`).join('\n\n')}`))}
                              onPaste={onPaste}
                              onChange={console.log('hello world', desc)}/>

       </div>
      </div>
        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );

}
