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


const slugify = require('slugify')



require('medium-editor/dist/css/medium-editor.css')
require('medium-editor/dist/css/themes/default.css')

export default function Write() {



  const [text, setText] = useState("hello world, coding is no one's joke")

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [content, setContent] = useState("")
  const [cardTitle, setCardTitle] = useState("not ready")
  const [cardDesc, setCardDesc] = useState("")
  const [cardCat, setCardCat] = useState("")
  const [category, setCategory] = useState("")
  const [shot, setShot] = useState("")
  const [shotAuthor, setShotAuthor] = useState("")


  /**Event variables */
  const [eventName, setEventName] = useState("")
  const [eventDesc, setEventDesc] = useState("")
  const [venue, setVenue] = useState("")
  const [time, setTime] = useState("")
  const [rounds, setRounds] = useState("")
  const [categories, setCategories] = useState("")
  const [organisers, setOrganisers] = useState("")
  const [sponsors, setSponsors] = useState("")
  const [registrationLink, setRegistrationLink] = useState("")
  const [date, setDate] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [prizes, setPrizes] = useState("")



  /**Player variables */
  const [playerName, setPlayerName] = useState("")
  const [nickName, setNickName] = useState("")
  const [federation, setFederation] = useState("")
  const [nationality, setNationality] = useState("")
  const [fideRating, setFideRating] = useState("")
  const [peakRating, setPeakRating] = useState("")
  const [club, setClub] = useState("")
  const [description, setDescription] = useState("")
  const [playerImg, setPlayerImg] = useState("")





  var fieldValue = 'hello'



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      content,
      category,
      slug: slugify(title, { lower: true, strict: true }),
      shot,
      shotAuthor,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace(`/post/${newPost.slug}`)
      /**window.location.replace("/post/" + res.data._id);**/
    } catch (err) { }
  };

  const handleSubmitb = async (e) => {
    e.preventDefault();
    const newCard = {
      cardTitle,
      cardDesc,
      cardCat,
    };
    try {
      const res = await axios.post("/cards", newCard);
      window.location.replace("/card/" + res.data._id);

    } catch (err) {

      console.log(err.response.data)
    }

  };

  const handleSubmitc = async (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      eventDesc,
      imgUrl,
      venue,
      time,
      rounds,
      categories,
      organisers,
      sponsors,
      registrationLink,
      date,
      prizes
    };
    try {
      const res = await axios.post("/events", newEvent);
      window.location.replace("/event/" + res.data._id);

    } catch (err) {

      console.log(err.response.data)
    }

  };

  const handleSubmitd = async (e) => {
    e.preventDefault();
    const newPlayer = {
      playerName,
      nickName,
      federation,
      nationality,
      fideRating,
      peakRating,
      club,
      description,
      playerImg,
    };
    try {
      const res = await axios.post("/players", newPlayer);
      window.location.replace("/player/" + res.data._id);

    } catch (err) {

      console.log(err.response.data)
    }

  };

  return (

    <>
      {/**Write post */}
      <div className="writeSection">
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
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">


              <textarea
                placeholder="Tell your story..."
                type="text"
                className="writeInput writeText"
                onChange={e => setContent(e.target.value)}
              >
              </textarea>

            </div>


            <div className="writeFormGroup">


              <textarea
                placeholder="Give a short description of your story..."
                type="text"
                className="writeInput writeText"
                onChange={e => setDesc(e.target.value)}
              >
              </textarea>

            </div>

            <div className="writeFormGroup">


              <textarea
                placeholder="Any quote shot?"
                type="text"
                className="writeInput writeText"
                onChange={e => setShot(e.target.value)}
              >
              </textarea>


            </div>
            <div className="writeFormGroup">

<textarea
  placeholder="Author to the shot"
  type="text"
  className="writeInput writeText"
  onChange={e => setShotAuthor(e.target.value)}
>
</textarea>

</div>

            <div className="writeFormGroup">


              <textarea
                placeholder="Post category:"
                type="text"
                className="writeInput writeText"
                onChange={e => setCategory(e.target.value)}
              >
              </textarea>
            </div>

            <div className="writeFormGroup">
            </div>
            <button className="writeSubmit" type="submit">
              Publish post
            </button>
          </form>

        </div>
      </div>
      {/**create card */}

      <div className="writeSection">
        <div className="editor">
          <form className="writeForm" onSubmit={handleSubmitb}>
            <div className="writeFormGroup">
              <input
                type="text"
                placeholder="CardTitle"
                className="writeInput"
                autoFocus={true}
                onChange={e => setCardTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Set your card description..."
                type="text"
                className="writeInput writeText"
                onChange={e => setCardDesc(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Set your card category..."
                type="text"
                className="writeInput writeText"
                onChange={e => setCardCat(e.target.value)}
              >
              </textarea>
            </div>
            <button className="writeSubmit" type="submit">
              Submit card
            </button>
          </form>
        </div>
      </div>


      {/**Create event */}

      <div className="writeSection">
        <div className="editor">
          <form className="writeForm" onSubmit={handleSubmitc}>
            <div className="writeFormGroup">
              <input
                type="text"
                placeholder="Event Name"
                className="writeInput"
                autoFocus={true}
                onChange={e => setEventName(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="The chess event's description..."
                type="text"
                className="writeInput writeText"
                onChange={e => setEventDesc(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Enter the url to the chess event flyer image"
                type="text"
                className="writeInput writeText"
                onChange={e => setImgUrl(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Event venue"
                type="text"
                className="writeInput writeText"
                onChange={e => setVenue(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Event start time: ie 8:00 AM"
                type="text"
                className="writeInput writeText"
                onChange={e => setTime(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Format: ie 30mins 6rounds"
                type="text"
                className="writeInput writeText"
                onChange={e => setRounds(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Categories: ie U18, U12, Open, U50"
                type="text"
                className="writeInput writeText"
                onChange={e => setCategories(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Organisers: Name of organisers"
                type="text"
                className="writeInput writeText"
                onChange={e => setOrganisers(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Sponsors"
                type="text"
                className="writeInput writeText"
                onChange={e => setSponsors(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Registration link: URL to the registration site"
                type="text"
                className="writeInput writeText"
                onChange={e => setRegistrationLink(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Date: ie 21st May 2022"
                type="text"
                className="writeInput writeText"
                onChange={e => setDate(e.target.value)}
              >
              </textarea>
            </div>

            <div className="writeFormGroup">
              <textarea
                placeholder="Prizes"
                type="text"
                className="writeInput writeText"
                onChange={e => setPrizes(e.target.value)}
              >
              </textarea>
            </div>
            <button className="writeSubmit" type="submit">
              Submit Event
            </button>
          </form>
        </div>

      </div>


      {/**Create player */}

      <div className="writeSection">

        <div className="editor">
          <form className="writeForm" onSubmit={handleSubmitd}>
            <div className="writeFormGroup">
              <input
                type="text"
                placeholder="Player Name"
                className="writeInput"
                autoFocus={true}
                onChange={e => setPlayerName(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Player nick name..."
                type="text"
                className="writeInput writeText"
                onChange={e => setNickName(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Chess Player's federation"
                type="text"
                className="writeInput writeText"
                onChange={e => setFederation(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Chess Player's Nationality"
                type="text"
                className="writeInput writeText"
                onChange={e => setNationality(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Chess Player's fide rating"
                type="text"
                className="writeInput writeText"
                onChange={e => setFideRating(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Chess Player's peak rating"
                type="text"
                className="writeInput writeText"
                onChange={e => setPeakRating(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Chess Player's club"
                type="text"
                className="writeInput writeText"
                onChange={e => setClub(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Chess Player's story aka description"
                type="text"
                className="writeInput writeText"
                onChange={e => setDescription(e.target.value)}
              >
              </textarea>
            </div>
            <div className="writeFormGroup">
              <textarea
                placeholder="Chess Player's image"
                type="text"
                className="writeInput writeText"
                onChange={e => setPlayerImg(e.target.value)}
              >
              </textarea>
            </div>
            <button className="writeSubmit" type="submit">
              Submit player
            </button>
          </form>
        </div>
      </div>
    </>
  );

}
